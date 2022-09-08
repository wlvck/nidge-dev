<template>
  <component :is="iconName"/>
</template>
<script>
import LeftArrow from '@/components/Icons/Index/LeftArrow'
import RightArrow from '@/components/Icons/Index/RightArrow'
import FeedbackStar from '@/components/Icons/Index/FeedbackStar'

export default {
  name: "Icon",
  props: {
    iconName: String
  },
  components: {
    LeftArrow,
    RightArrow,
    FeedbackStar
  }
}
</script>
