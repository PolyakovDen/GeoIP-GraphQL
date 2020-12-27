<template>
 <header class="header">
   <div class="container">
     <h1 class="header__title">{{ title }}</h1>
     <select v-model="$i18n.locale" class="header__dropdown">
       <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.value">
         {{ lang.title }}
       </option>
     </select>
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
    },
    data () {
      return {
        langs: [
          {
            title: 'EN',
            value: 'en'
          },
          {
            title: 'RU',
            value: 'ru'
          }
        ]
      }
    },
    watch: {
      '$i18n.locale': {
        handler (val) {
          this.$store.commit('setLocale', val)
        }
      }
    },
    // methods: {
    //   handleChange (event) {
    //     console.log(event.target.value)
    //   }
    // }
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
    display: flex;
  }
  .header__title {
    margin: 0;
    font-size: 18px;
    color: #fff;
    text-align: center;
    margin-left: auto;
  }
  .header__dropdown {
    margin-left: auto;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: white;
  }
  .header__dropdown:focus{
    outline: none;
    border: none;
  }
  .header__dropdown option {
    color: black;
  }
</style>
