<script setup lang="ts">
import { toRefs } from 'vue'

type Props = {
  ability: string
  tag: string
}

const props = withDefaults(defineProps<Props>(), {
  ability: '',
  tag: '',
})

const { ability, tag } = toRefs(props)
</script>

<template>
  <div>
    <p class="text-gray-700 font-bold">
      {{ ability }}
    </p>
    <p class="text-xs mt-2 text-gray-600">
      {{ tag }}
    </p>
  </div>
</template>
