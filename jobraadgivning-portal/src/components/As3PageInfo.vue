<template>
  <h1 class="text-2xl font-bold mb-4">{{title}}</h1>
  <p class="mb-6">{{description}}</p>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'PageInfo',
});

defineProps<{
  title: string;
  description: string
}>();
</script>