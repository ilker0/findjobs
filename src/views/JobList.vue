<template>
  <b-container class="job-list">
    <span class="job-list-info">4 Yeni İş</span>
    <h2 class="job-list-title">Yeni & Rastgele İşler</h2>

    <b-row v-if="loading" class="job-list-content">
      <b-col
        cols="12"
        md="6"
        lg="3"
        class="mt-4"
        v-for="(item, index) in 8"
        :key="index"
      >
        <b-skeleton-img no-aspect height="300px"></b-skeleton-img>
      </b-col>
    </b-row>

    <b-row v-else class="job-list-content">
      <b-col
        cols="12"
        md="6"
        lg="3"
        class="mt-4"
        v-for="item in data"
        :key="item.jobid"
      >
        <JobCard
          :id="item.jobId"
          :logoUrl="item.imageUrl"
          :tag="item.durationDayText"
          :title="item.positionName"
          :company="item.companyName"
          :location="item.cityName"
          :town="item.townName"
          :distance="item.distance"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import JobCard from "../components/shared/JobCard";

export default {
  components: {
    JobCard,
  },

  data() {
    return {
      loading: true,
    };
  },

  created() {
    this.getJobListRequest();
  },

  methods: {
    getJobListRequest() {
      this.$store.dispatch("getJobList").finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 500);
      });
    },
  },

  computed: {
    data() {
      return this.$store.getters.jobs;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/views/index.scss";
</style>
