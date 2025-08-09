<template>
  <label class="label">
    <input type="checkbox" v-model="model">
    {{ label }}
  </label>

  <!-- <label class="label" 
    :class="{'completed': value}"
  >
    <input type="checkbox" 
        :checked="value"
        @change="onChange">
    {{ label }}
  </label> -->
</template>

<script setup>

    const model = defineModel();

    const props = defineProps({
        label: {
            type: String,
            required: true
        },
        value: {
            type: Boolean,
            default: false
        }
    });

    // const emit = defineEmits(['check', 'uncheck']);

    // const onChange = (e) => {
    //   if (e.currentTarget.checked) {
    //     emit('check', e.currentTarget);
    //   } else {
    //     emit('uncheck', e.currentTarget);
    //   }
    // };

    // const emit = defineEmits(['update:value']);

    // const onChange = (e) => {
    //   emit('update:value', e.currentTarget.checked);
    // };
</script>