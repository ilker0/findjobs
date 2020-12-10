<template>
  <div class="jobDetailCard">
    <b-row no-gutters>
      <b-col cols="12" lg="2">
        <div class="jobDetailCard-logo-wrapper">
          <img :src="logoUrl" alt="" class="jobDetailCard-logo" />
        </div>
      </b-col>
      <b-col cols="12" lg="10">
        <h3 class="jobDetailCard-title">{{ title }}</h3>
        <p class="jobDetailCard-companyName">
          {{ companyName }}
        </p>
        <span class="jobDetailCard-townName">
          <b-icon icon="geo-alt-fill" aria-hidden="true"></b-icon>
          {{ location }}, {{ town }}
        </span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    logoUrl: String,
    title: String,
    companyName: String,
    location: String,
    town: String,
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components/index.scss";
</style>
