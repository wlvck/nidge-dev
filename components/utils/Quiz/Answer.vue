<template>
  <div>
    <keep-alive>
      <component :is="type" :option="option" :placeholder="'Number'"></component>
    </keep-alive>
  </div>
</template>

<script>
import Input from "@/components/utils/Quiz/Input";
import Checkbox from "@/components/utils/Quiz/Checkbox";
import Radio from "@/components/utils/Quiz/Radio";
import Stack from "@/components/utils/Quiz/Stack";

export default {
  name: "Answer",
  props: ['type', 'option'],
  components: {
    Input,
    Checkbox,
    Radio,
    Stack
  },
  data() {
    return {}
  },
}
</script>

<style scoped>

</style>
