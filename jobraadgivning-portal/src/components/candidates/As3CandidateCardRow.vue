<template>
  <div>
    <p class="text-black text-base font-medium">{{ label }}</p>
    <template v-if="inEditMode">
      <input
          v-model="internalValue"
          class="border border-gray-300 rounded px-2 py-1 w-full"
          @input="$emit('update:modelValue', internalValue)"
      />
    </template>
    <template v-else>
      <p class="text-gray-600 mb-2">{{ displayValue }}</p>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue';

defineOptions({
  name: 'As3CandidateCardRow'
});

const props = defineProps<{
  label: string;
  inEditMode?: boolean;
  modelValue?: string | number | null;
}>();

const internalValue = ref(props.modelValue ?? '');

watch(() => props.modelValue, (val) => {
  internalValue.value = val ?? '';
});

const displayValue = computed(() => {
  const val = internalValue.value ?? '';
  return props.label.toLowerCase() === 'land'
      ? String(val).toUpperCase()
      : String(val);
});
</script>

