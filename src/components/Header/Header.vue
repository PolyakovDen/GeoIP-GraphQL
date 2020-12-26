<template>
 <header class="header">
   <div class="container">
     <h1 class="header__title">{{ title }}</h1>
   </div>
 </header>
</template>

<script>
  export default {
    name: "Header",
    props: {
      title: {
        type: String,
        required: true,
        default: 'Title'
      }
    }
  }
</script>

<style scoped>
  .header {
    background-color: #656BF2;
    padding-top: 12px;
    padding-bottom: 11px;
  }
  .container {
    max-width: 1170px;
    margin: 0 auto;
  }
  .header__title {
    margin: 0;
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
</style>
