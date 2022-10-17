<template>
  <div class="coin-monitoring__wrapper">
    <div class="coin-monitoring__title">
      Wallet
    </div>
    <CoinChart v-if="getCoinsData.length > 0" :coinsData="getCoinsData"/>
    <CoinTable v-if="getCoinsData.length > 0" :coinsData="getCoinsData"/>
    <div v-if="getCoinsData.length === 0" class="coin-monitoring__loading"> LOADING...</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CoinChart from "./CoinChart.vue";
import CoinTable from "./CoinTabe.vue";
import { mapGetters } from "vuex";

@Options({
  components: {
    CoinChart,
    CoinTable
  },
  computed: {
    ...mapGetters([
      'getCoinsData',
    ])
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    this.$store.dispatch('getCoinsDataRequest');
  }
})
export default class CoinMotinoring extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coin-monitoring__wrapper {
  display: flex;
  flex-direction: column;
  background: url("/src/assets/world-bg.jpg") center no-repeat;
  background-size: cover;
  font-family: sans-serif;
  padding: 10px;
    font-weight: bold;
}
.coin-monitoring__title {
  display: flex;
  justify-content: center;
  font-size: 48px;
  color: #fff;
}
.coin-monitoring__loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  width: 100%;
  color: #fff;
  font-size: 48px;
}
</style>
