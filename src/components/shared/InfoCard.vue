<template>
  <div class="infoCard">
    <p class="infoCard-hood">İlan Özeti</p>

    <div class="infoCard-content">
      <p>
        <b-icon icon="geo-alt-fill" aria-hidden="true"></b-icon>
        Adres

        <span>
          {{ address }}
        </span>
      </p>

      <p>
        <b-icon icon="telephone-fill" aria-hidden="true"></b-icon>
        Telefon

        <span>
          {{ phone }}
        </span>
      </p>

      <p>
        <b-icon icon="envelope-fill" aria-hidden="true"></b-icon>
        Posta Kodu

        <span>
          {{ postalCode }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: String,
    phone: String,
    postalCode: String,
  },
};
</script>

<style lang="scss">
@import "../../assets/styles/components/index.scss";
</style>
