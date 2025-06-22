<template>
  <button
      v-if="hasContent"
      type="button"
      :class="buttonClass"
      @click.stop="emit('clicked')"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';

defineOptions({ name: 'As3Button' });

type ButtonSize = 'xs' | 'small' | 'normal' | 'large' | 'xl';
type ButtonType = 'text' | 'contained' | 'primary';

const props = defineProps<{
  size?: ButtonSize;
  type?: ButtonType;
}>();

const emit = defineEmits<{
  (e: 'clicked'): void;
}>();

const sizes: Record<ButtonSize, string> = {
  xs: 'text-xs px-1.5 py-0.5',
  small: 'text-sm px-2 py-1',
  normal: 'text-base px-4 py-2',
  large: 'text-lg px-6 py-3',
  xl: 'text-xl px-8 py-4',
};

const types: Record<ButtonType, string> = {
  text: 'text-blue-600 bg-transparent border border-transparent rounded hover:border-blue-600 hover:bg-blue-50',
  contained: 'text-blue-600 border border-blue-600 rounded hover:bg-blue-50',
  primary: 'text-white bg-blue-500 rounded hover:bg-blue-600',
};

const buttonClass = computed(() => {
  const sizeClass = sizes[props.size ?? 'normal'];
  const typeClass = types[props.type ?? 'primary'];
  return `${typeClass} ${sizeClass}`;
});

const slots = useSlots();
const hasContent = computed(() => !!slots.default);
</script>
