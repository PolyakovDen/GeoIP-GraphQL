<template>
  <div class="main-wrapper">
    <Header title="GeoIP" />
    <div class="container">
      <CustomInput title="IP Address" id="ip" />
      <CustomButton title="Get information" />
    </div>
  </div>
</template>

<script>
  import Header from "./Header/Header";
  import CustomButton from "./ui/CustomButton";
  import CustomInput from "./ui/CustomInput";
  export default {
    name: "Wrapper",
    components: {
      Header,
      CustomButton,
      CustomInput
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
