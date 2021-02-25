<template>
  <small class="text-danger">{{ errMsg }}</small>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
      require: true
    }
  },
  computed: {
    errMsg() {
      let error = "";
      if (this.errors[0]) error = "* " + this.errors[0];
      return error;
    }
  }
};
</script>

<style></style>
