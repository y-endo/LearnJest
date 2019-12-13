<template>
  <div>
    <p>{{ text }}</p>
    <button @click="handleClick"></button>
  </div>
</template>

<script>
export default {
  name: 'ModuleButton',
  props: {
    text: {
      type: String,
      required: true,
      default: () => ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('clicked');
    }
  }
};
</script>
