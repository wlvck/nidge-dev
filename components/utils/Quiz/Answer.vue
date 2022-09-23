<template>
  <div>
    <keep-alive v-for="type in types" :key="type">
      <component
        :class="types.length > 1 ? 'multiple__component' : ''"
        :is="type"
        :options="options"
        :placeholder="'Number'"/>
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
  props: ['types', 'options'],
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

<style lang="scss">
.multiple__component{
  margin-bottom: 36px;
}
</style>
