<template>
  <div class="coin-chart__wrapper">
    <div class="coin-chart__title">
      Balance
    </div>
    <div class="coin-chart">
      <LineChartWrapper :chartData="chartData" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LineChartWrapper from "./common/LineChartWrapper.vue";

@Options({
  components: {
    LineChartWrapper
  },
  props: {
    coinsData: {
      type: Object
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#fff',
            borderColor: "#002366",
            data: [40, 39, 10, 40, 39, 80, 40]
          }
        ]
      }
    }
  },
  mounted() {
    console.log(this.coinsData);
  }
})
export default class CoinChart extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coin-chart__wrapper {
  display: flex;
  flex-direction: column;
  height: calc(40vh - 55px - 40px);
  background-color: rgba(255, 255,255, 0.9);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 15px;
}
.coin-chart__title {
  display: flex;
  justify-content: center;
  font-size: 24px;
}
</style>
