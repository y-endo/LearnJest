<template>
  <div>
    <p>{{ text }}</p>
    <button @click="handleClick">ボタン</button>
  </div>
</template>

<script>
export default {
  name: 'ModuleButton',
  props: {
    text: {
      type: String,
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
