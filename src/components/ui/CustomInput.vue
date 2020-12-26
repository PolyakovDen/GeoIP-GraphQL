<template>
  <div class="custom-input__block">
    <label class="custom-label" :for="id">
      {{ title }}
    </label>
    <input-mask
            class="custom-input"
            :id="id"
            :value="value"
            placeholder="000.000.00.00"
            mask="999.999.99.99"
            maskChar=" "
            :class="{ 'errorInput': isError }"
    />
  </div>
</template>

<script>
  export default {
    name: "CustomInput",
    props: {
      id: {
        type: String,
        required: true,
        default: 'ip'
      },
      title: {
        type: String,
        required: true,
        default: 'Title input'
      },
      value: {
        type: String
      },
      isError: {
        type: Boolean
      }
    }
  }
</script>

<style scoped>
  .custom-input__block {
    display: flex;
    flex-direction: column;
  }
  .custom-label {
    font-size: 18px;
    line-height: 25px;
  }
  .custom-input {
    margin-top: 8px;
    border: 1px solid #CCC;
    font-size: 16px;
    color: #CCC;
    border-radius: 8px;
    height: 45px;
    width: 396px;
    box-sizing: border-box;
    padding-left: 18px;
  }
  .custom-input:focus {
    outline: none;
    border: 1px solid #656BF2;
  }
  .errorInput {
    border: 1px solid #FF6C6C;
  }
</style>
