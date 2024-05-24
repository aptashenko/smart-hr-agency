<template>
  <div class="landing-page">
    <the-hero />
    <the-work-areas id="areas" />
    <the-proposals id="coop" />
    <how-we-work id="steps" />
  </div>
</template>
<script setup>
import TheHero from "@/components/pages/LandingPage/TheHero.vue";
import TheProposals from "@/components/pages/LandingPage/TheProposals.vue";
import TheWorkAreas from "@/components/pages/LandingPage/TheWorkAreas.vue";
import HowWeWork from "@/components/pages/LandingPage/HowWeWork.vue";
</script>
