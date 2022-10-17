<template>
  <div class="coin-table__wrapper">
    <div class="coin-table">
      <div class="coin-table__header">
        <div class="coin-table__header-column">Name</div>
        <div class="coin-table__header-column">Price</div>
        <div class="coin-table__header-column">24 H Change</div>
      </div>
      <div class="coin-table__body">
        <div class="coin-table__row" v-for="(item, k) of coinsData" :key="k">
          <div class="coin-table__column">
            {{item.name}}
          </div>
          <div class="coin-table__column">
            {{item.price}}
          </div>
          <div class="coin-table__column">
            {{item.dayChange}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    coinsData: {
      type: Object
    }
  },
  mounted() {
    console.log(this.coinsData);
  }
})
export default class CoinTabe extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coin-table__wrapper {
  display: flex;
  height: calc(60vh - 40px);
  background-color: rgba(255, 255,255, 0.9);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 15px;
}
.coin-table {
  display: flex;
  color: #000;
  width: 100%;
  flex-direction: column;
}
.coin-table__body::-webkit-scrollbar
{
	width: 8px;
	background-color: #F5F5F5;
}
.coin-table__body::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #002366;
}
.coin-table__body::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

.coin-table__header {
  display: flex;
  flex-grow: 1;
  font-weight: bold;
}
.coin-table__header-column {
  padding: 15px;
  display: flex;
  width: 33.33%;
  justify-content: center;
}
.coin-table__body {
  overflow: auto;
}

.coin-table__row {
  display: flex;
}
.coin-table__column {
  background: #fff;
  padding: 15px;
  display: flex;
  justify-content: center;
  width: 33.33%;
  font-weight: 400;
  border-bottom: 1px solid #ccc;
}
</style>
