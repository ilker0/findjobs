<template>
  <b-container class="job-detail">
    <b-row v-if="loading" class="job-detail-content">
      <b-col cols="12" class="mt-4" v-for="(item, index) in 3" :key="index">
        <b-skeleton-img no-aspect height="200px"></b-skeleton-img>
      </b-col>
    </b-row>

    <b-row v-else>
      <b-col cols="12">
        <JobDetailCard
          :logoUrl="detail.imageUrl"
          :title="detail.positionName"
          :companyName="detail.companyName"
          :location="detail.cityName"
          :town="detail.townName"
        />
      </b-col>

      <b-col cols="12" lg="8">
        <div class="job-detail-content">
          <h3 class="job-detail-hood">Açıklama</h3>
          <p>
            {{ detail.description }}
          </p>

          <h3 class="job-detail-hood mt-5">Lokasyon</h3>

          <GmapMap
            :center="{ lat: detail.latitude, lng: detail.longitude }"
            :zoom="15"
            map-type-id="terrain"
            style="width: 100%; height: 300px; margin-bottom: 30px;"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="{ lat: detail.latitude, lng: detail.longitude }"
              :clickable="true"
              :draggable="true"
              @click="center = m.position"
            />
          </GmapMap>
        </div>
      </b-col>

      <b-col cols="12" lg="4">
        <div class="job-detail-content">
          <InfoCard
            :address="detail.address"
            :phone="
              `${detail.contactPhone.countryCallingCode} (${detail.contactPhone.areaCode}) ${detail.contactPhone.number}`
            "
            :postalCode="detail.postalCode"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import JobDetailCard from "../components/shared/JobDetailCard";
import InfoCard from "../components/shared/InfoCard";

export default {
  components: {
    JobDetailCard,
    InfoCard,
  },

  data() {
    return {
      loading: true,
    };
  },

  created() {
    this.getJobDetailsRequest();
  },

  methods: {
    getJobDetailsRequest() {
      this.$store
        .dispatch("getJobDetail", this.$route.params.id)
        .finally(() => {
          setTimeout(() => {
            this.loading = false;
          }, 500);
        });
    },
  },

  computed: {
    detail() {
      return this.$store.getters.detail[0];
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/views/index.scss";
</style>
