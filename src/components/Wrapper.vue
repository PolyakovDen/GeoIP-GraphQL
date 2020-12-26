<template>
  <div class="main-wrapper">
    <Header title="GeoIP" />
    <div class="container">
      <InputSection />
      <ResultTable />
    </div>
  </div>
</template>

<script>
  import Header from "./Header/Header";
  import InputSection from './InputSection/InputSection'
  import ResultTable from "./Tables/ResultTable"
  export default {
    name: "Wrapper",
    components: {
      Header,
      ResultTable,
      InputSection
    },
    data () {
      return {
      }
    }
}
</script>

<style scoped>
  .main-wrapper {
    background-color: #E5E5E5;
    height: 100vh;
  }
  .container {
    max-width: 1170px;
    box-sizing: border-box;
    margin: 40px auto;
    background-color: white;
    padding: 48px;
  }
</style>
