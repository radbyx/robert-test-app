<template>
  <div :class="cardClass" @click="$emit('clicked')">
    <div class="flex items-center justify-between mb-4 border-b-2 border-gray-500 pb-2">
      <h2 class="text-xl font-semibold">{{ fullName }}</h2>
      <As3Button size="small" type="contained" @clicked="$emit('removeCandidate')">
        Slet
      </As3Button>
    </div>

    <div class="mb-auto space-y-4">
      <As3CandidateCardRow
          label="Fornavn"
          v-model="editableCandidate.firstname"
          :inEditMode="inEditMode"
      />
      <As3CandidateCardRow
          label="Efternavn"
          v-model="editableCandidate.lastname"
          :inEditMode="inEditMode"
      />
      <As3CandidateCardRow
          label="Rådgiver"
          v-model="editableCandidate.advisor"
          :inEditMode="inEditMode"
      />
      <As3CandidateCardRow
          label="Adresse"
          v-model="editableCandidate.address"
          :inEditMode="inEditMode"
      />
      <As3CandidateCardRow
          label="Land"
          v-model="editableCandidate.country"
          :inEditMode="inEditMode"
      />
      <As3CandidateCardRow
          label="Sprog"
          v-model="editableCandidate.language"
          :inEditMode="inEditMode"
      />
      <As3CandidateCardRow
          v-if="inEditMode"
          label="Email"
          v-model="editableCandidate.email"
          :inEditMode="inEditMode"
      />
      <As3CandidateCardRow
          v-if="inEditMode"
          label="Brugernavn"
          v-model="editableCandidate.username"
          :inEditMode="inEditMode"
      />
      <As3CandidateCardRow
          label="Id (kun til demo)"
          v-model="editableCandidate.id"
          :inEditMode="false"
      />
    </div>

    <div v-if="inEditMode" class="text-right mt-6">
      <As3Button type="text" class="mr-4" @clicked="$emit('cancelEdit')">
        Annuller
      </As3Button>
      <As3Button @clicked="save">
        Gem
      </As3Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed, watch } from 'vue';
import type { Candidate } from '../../types';
import As3Button from "../common/As3Button.vue";
import As3CandidateCardRow from "./As3CandidateCardRow.vue";

defineOptions({
  name: 'As3CandidateCard',
});

const props = defineProps<{
  candidate: Candidate;
  inEditMode?: boolean;
}>();

const emit = defineEmits(['clicked', 'removeCandidate', 'cancelEdit', 'saveChanges']);

const editableCandidate = reactive({ ...props.candidate });

watch(() => props.candidate, (newCandidate) => {
  Object.assign(editableCandidate, newCandidate);
});

const cardClass = computed(() => ({
  'candidate-card': !props.inEditMode,
  'bg-white shadow-md rounded-lg p-4': true,
}));

const fullName = computed(() => `${editableCandidate.firstname} ${editableCandidate.lastname}`);

function save() {
  emit('saveChanges', { ...editableCandidate });
}
</script>

<style scoped>
.candidate-card {
  transition: transform 0.1s;
}
.candidate-card:hover {
  transform: scale(1.02);
}
</style>
