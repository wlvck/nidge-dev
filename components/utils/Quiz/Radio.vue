<template>
  <div class="custom__radio mb-6">
    <input name="radio" :value="option[1]" type="radio" :id="'radio' + option[0]">
    <label :for="'radio' + option[0]">{{ option[1] }}</label>
  </div>
</template>

<script>
export default {
  name: "Radio",
  props: ['option']
}
</script>

<style lang="scss">
.custom__radio {
  position: relative;


  label {
    position: relative;
    padding-left: 28px;
    font-weight: 400;
    cursor: pointer;
    font-size: 16px;
    line-height: 100%;
    color: #000000;


    &:after {
      position: absolute;
      left: 0;
      border-radius: 50%;
      transition: 0.3s;
      width: 16px;
      height: 16px;
      top: 0;
      content: '\2713';
      display: flex;
      font-size: 12px;
      justify-content: center;
      color: white;
      align-items: center;
      border: 1.5px solid #DBDAEA;
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
