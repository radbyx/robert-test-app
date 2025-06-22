<template>
  <h2 v-if="candidateToEdit" class="text-xl font-semibold mb-4">Rediger kandidat</h2>
  <As3ToolBar
      v-else
      title="Kandidaterne"
      @search="onSearch"
      @addCandidate="addCandidate"
  />

  <As3CandidateCard
      v-if="candidateToEdit"
      :candidate="candidateToEdit"
      :in-edit-mode="true"
      @removeCandidate="removeCandidate(candidateToEdit.id)"
      @cancelEdit="candidateToEdit = null"
      @saveChanges="updateCandidate"
  />
  <As3CandidateCards
      v-else
      :candidates="filteredCandidates"
      @removeCandidate="removeCandidate"
      @openCandidate="openCandidate"
  />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useCandidateStore } from '../../store/candidateStore';
import { ref, computed } from "vue";
import As3ToolBar from '../common/As3ToolBar.vue';
import As3CandidateCards from "../../components/candidates/As3CandidateCards.vue";
import As3CandidateCard from "../../components/candidates/As3CandidateCard.vue";
import type { Candidate } from "@/types";

const candidateStore = useCandidateStore();
const { candidates } = storeToRefs(candidateStore);
const uniqueId = ref(candidates.value.length + 1);
const candidateToEdit = ref<Candidate | null>(null);
const filteredCandidates = computed(() => candidateStore.filteredCandidates);

function onSearch(searchTerm: string) {
  candidateStore.setSearchTerm(searchTerm);
}

// Note: Short version. Wanted to focus on interact with store.
// Better version, would include something similar to edit card, just with empty fields
function addCandidate() {
  uniqueId.value++;
  let originalCandidate = candidates.value[0];
  const newCandidate: Candidate = { ...originalCandidate, id: uniqueId.value.toString() };
  candidateStore.addCandidate(newCandidate);
}

function removeCandidate(id: string) {
  const found = candidates.value.find(c => c.id === id);
  if (found) {
    const confirmDelete = window.confirm(`Er du sikker på, at du vil slette ${found.firstname} ${found.lastname}?`);
    if (confirmDelete) {
      candidateStore.removeCandidate(id);
      if (candidateToEdit.value?.id === id) candidateToEdit.value = null;
    }
  }
}

function openCandidate(id: string) {
  const found = candidates.value.find(c => c.id === id);
  if (found) {
    candidateToEdit.value = { ...found };  // create copy to avoid mutating store directly
  }
}

function updateCandidate(updatedCandidate: Candidate) {
  candidateStore.updateCandidate(updatedCandidate);
  candidateToEdit.value = null;
}
</script>