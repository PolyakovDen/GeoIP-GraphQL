<template>
  <div class="custom-button">
    <button class="btn" :class="{ 'disabled-btn': disabled  }">
      {{ title }}
    </button>
  </div>
</template>

<script>
  export default {
    name: "CustomButton",
    props: {
     title: {
       type: String,
       required: true
     },
     disabled: {
      type: Boolean
     }
    }
  }
</script>

<style scoped>
  .btn {
    margin-top: 18px;
    color: #fff;
    width: 254px;
    height: 48px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background: #FF5252;
    opacity: 0.85;
  }
  .btn:hover {
    background: #FF6C6C;
    box-shadow: 0 0 20px rgba(255, 108, 108, 0.7);
  }
  .disabled-btn {
    background: #E6E6E6;
    opacity: 0.85;
  }
  .disabled-btn:hover {
    background: #E6E6E6;
    opacity: 0.85;
    box-shadow: none;
    cursor: default;
  }
  .disabled-btn:focus,
  .btn:focus {
    outline: none;
  }
</style>
