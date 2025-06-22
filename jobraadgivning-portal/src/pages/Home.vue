<template>
  <div class="container mx-auto p-4">
    <As3PageInfo
      title="Velkommen til Jobrådgivnings Portalen"
      description="Her kan du finde information om kandidater og hjælpe dem i job."
    />

    <As3PageCandidates/>
  </div>
</template>

<script lang="ts" setup>
import As3PageInfo from '../components/As3PageInfo.vue';
import As3PageCandidates from '../components/candidates/As3PageCandidates.vue';

defineOptions({
  name: 'Home',
});

</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>