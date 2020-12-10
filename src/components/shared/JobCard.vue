<template>
  <div class="jobCard">
    <p class="jobCard-tag">{{ tag }}</p>
    <div class="jobCard-logo-wrapper">
      <img :src="logoUrl" alt="" class="jobCard-logo" />
    </div>

    <p class="jobCard-title">{{ title }}</p>
    <span class="jobCard-company">{{ company }}</span>
    <router-link class="jobCard-link" :to="'/jobdetail/' + id">
      <b-button class="button" size="sm">İncele</b-button>
    </router-link>

    <div class="jobCard-footer">
      <b-row align-v="center">
        <b-col cols="12">
          <p class="jobCard-footer-item">
            <b-icon icon="geo-alt-fill" aria-hidden="true"></b-icon>
            {{ location }}, {{ town }}
          </p>
        </b-col>
        <b-col cols="12">
          <p class="jobCard-footer-item">
            <b-icon icon="info-circle-fill" aria-hidden="true"></b-icon>
            {{ distance }}
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    logoUrl: String,
    tag: String,
    title: String,
    company: String,
    location: String,
    town: String,
    distance: String,
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components/index.scss";
</style>
