import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoByIp: [],
    defaultData: [
      {
        ipAddress: '000.000.00.00',
        continent: '',
        country: '',
        city: '',
        timeZone: '',
        coordinates: ''
      }
    ],
    historyData: [],
    defaultHistoryData: [
      {
        ipAddress: '000.000.00.00',
        country: '',
        city: ''
      }
    ]
  },
  getters: {
    getInfoByIp: state => state.infoByIp,
    getDefaultData: state => state.defaultData,
    getHistoryData: state => state.historyData,
    getDefaultHistoryData: state => state.defaultHistoryData
  },
  mutations: {
    setInfoByIp (state, payload) {
      state.infoByIp = [payload]
    },
    setHistoryData (state, payload) {
      const historyFormateDate = [
        {
          ipAddress:  payload.ipAddress,
          country: payload.country,
          city: payload.city
        }
      ]
      state.historyData = [...state.historyData, ...historyFormateDate]
    },
    clearHistoryData (state) {
      state.historyData = []
    }
  }
})
