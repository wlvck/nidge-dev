<template>
  <component :is="iconName"/>
</template>
<script>
import LeftArrow from '@/components/Icons/Index/LeftArrow'
import RightArrow from '@/components/Icons/Index/RightArrow'
import FeedbackStar from '@/components/Icons/Index/FeedbackStar'
import Flexible from '@/components/Icons/Index/Flexible'
import Personal from '@/components/Icons/Index/Personal'
import Comprehensive from '@/components/Icons/Index/Comprehensive'
import Payment from "@/components/Icons/Index/Payment";
import Trial from "@/components/Icons/Index/Trial";
import Time from "@/components/Icons/Index/Time";
import TabArrow from "@/components/Icons/Index/TabArrow";
import Google from "@/components/Icons/auth/Google";
import Facebook from "@/components/Icons/auth/Facebook";
import Apple from "@/components/Icons/auth/Apple";
import Logout from "@/components/Icons/Index/Logout";
import Bell from "@/components/Icons/Index/Bell";
import EditButton from "@/components/Icons/account/EditButton";
export default {
  name: "Icon",
  props: {
    iconName: String
  },
  components: {
    LeftArrow,
    RightArrow,
    FeedbackStar,
    Personal,
    Comprehensive,
    Flexible,
    Payment,
    Trial,
    Time,
    TabArrow,
    Google,
    Facebook,
    Apple,
    Logout,
    Bell,
    EditButton
  }
}
</script>
