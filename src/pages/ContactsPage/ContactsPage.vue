<template>
  <div class="contacts-page">
    <ContactsSection />
    <ConnectWithContact class="mt-[30px] lg:hidden" />
  </div>
</template>

<script>
import ContactsSection from "./sections/ContactsSection.vue";

import ConnectWithContact from "../../components/ConnectWithContact.vue";
export default { components: { ContactsSection, ConnectWithContact } };
</script>
