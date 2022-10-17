import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    coinsData: []
  },
  getters: {
    getCoinsData(state) {
      return state.coinsData;
    }
  },
  mutations: {
    setCoinsData(state, data) {
      console.log(data)
      const newArr = [];
      for (const coin of data) {
        const newCoin = {
          name: coin.CoinInfo.Internal,
          price: coin.DISPLAY.USD.PRICE,
          dayChange: coin.DISPLAY.USD.CHANGE24HOUR
        }
        newArr.push(newCoin);
      }
      state.coinsData = newArr;
    }
  },
  actions: {
    async getCoinsDataRequest({ commit }) {
      try {
        const data = await axios.get('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD&api_key=96b3cbe243ed487e78905885dd0ddb7084b2ee60ffb942ffa07ffb24cf8f70eb')
          commit('setCoinsData', data.data.Data)
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
    }
  }
})
