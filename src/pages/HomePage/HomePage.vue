<template>
  <div class="home-page">
    <theTitle>Hello World</theTitle>
    <TheCallButton />
    <TheSendButton />
    
  </div>
</template>
<script>
import theTitle from "../../ui/theTitle.vue";
import TheCallButton from "../../ui/theCallButton.vue";
import TheSendButton from "../../ui/theSendButton.vue";
export default {
  components: {
    theTitle,
    TheCallButton,
    TheSendButton,
  },
};
</script>
