<template>
  <div class="history-table">
    <p class="history-table__title">History</p>
    <CustomTable :titles="titles" :dataArray="getHistoryData" />
    <CustomButton @click="deleteHistoryData" title="Clear history" :disabled="emptyHistoryData" />
  </div>
</template>

<script>
  import CustomTable from '../ui/CustomTable'
  import CustomButton from "../ui/CustomButton";
  export default {
    name: "HistoryTable",
    components: {
      CustomTable,
      CustomButton
    },
    data () {
      return {
        titles: [
          'IP address',
          'Country/code',
          'City'
        ],
        emptyHistoryData: false
      }
    },
    computed: {
      getHistoryData () {
        const data = this.$store.getters.getHistoryData
        const defaultData = this.$store.getters.getDefaultHistoryData
        return data.length > 0 ? data : defaultData
      },
      historyData () {
        return this.$store.getters.getHistoryData
      }
    },
    watch: {
      historyData () {
        this.checkOnLengthHistoryData()
      }
    },
    created () {
      this.checkOnLengthHistoryData()
    },
    methods: {
      checkOnLengthHistoryData () {
        if (!this.historyData.length) {
          this.emptyHistoryData = true
        } else {
          this.emptyHistoryData = false
        }
      },
      deleteHistoryData () {
        this.$store.commit('clearHistoryData')
      }
    }
  }
</script>

<style scoped>
  .history-table {
    width: 55%;
  }
  .history-table__title {
    font-size: 18px;
    line-height: 25px;
    margin: 48px 0 13px 0;
  }
</style>
