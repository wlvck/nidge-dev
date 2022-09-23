<template>
  <div>
    <div class="custom__checkbox mb-6" v-for="(option, index) in options" :key="option">
      <input v-model="checkbox__answer" :value="option" type="checkbox" :id="option + index">
      <label :for="option + index">{{ option }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: [
    'options'
  ],
  data() {
    return {
      checkbox__answer: []
    }
  }
}
</script>

<style lang="scss">
.custom__checkbox {
  position: relative;

  label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #000000;

    &:after {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      border-radius: 2px;
      transition: 0.3s;
      border: 1.5px solid #DBDAEA;
      content: '\2713';
    }
  }

  input {
    position: absolute;
    visibility: hidden;
    opacity: 0;

    &:checked ~ label:after {
      background: #00489D;
    }
  }
}
</style>
