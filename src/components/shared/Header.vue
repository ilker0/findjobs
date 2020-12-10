<template>
  <header class="header">
    <b-container>
      <b-row>
        <b-col lg="3" md="12">
          <router-link to="/">
            <img
              class="header-logo"
              :src="require('../../assets/logo.png')"
              alt=""
            />
          </router-link>
        </b-col>

        <b-col lg="9" md="12">
          <b-form>
            <b-row
              no-gutters
              class="justify-content-start justify-content-lg-end"
            >
              <b-col cols="4" class="mr-2">
                <b-form-input
                  id="input-1"
                  v-model="form.keyword"
                  type="text"
                  required
                  placeholder="Pozisyon adı"
                ></b-form-input>
              </b-col>
              <b-col cols="4" class="mr-2">
                <b-form-select
                  id="input-3"
                  v-model="form.location"
                  :options="locations"
                  required
                ></b-form-select>
              </b-col>
              <b-button class="button-primary" type="submit" variant="primary">
                Ara</b-button
              >
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  data() {
    return {
      form: {
        keyword: "",
        location: null,
      },
      locations: [
        { text: "Şehir", value: null },
        { text: "İstanbul", value: 0 },
        { text: "Ankara", value: 1 },
        { text: "İzmir", value: 2 },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components/index.scss";
</style>
