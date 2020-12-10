<template>
  <div>
    <Header />
    <slot></slot>
  </div>
</template>

<script>
import Header from "./shared/Header";

export default {
  components: {
    Header,
  },
};
</script>
