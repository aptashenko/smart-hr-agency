<template>
  <div class="landing-page">
    <the-hero />
    <the-work-areas id="areas" />
    <the-benefits />
    <the-proposals id="coop" />
    <how-we-work id="steps" />
    <banner-form />
  </div>
</template>
<script setup>
import TheHero from "@/components/pages/LandingPage/TheHero.vue";
import TheProposals from "@/components/pages/LandingPage/TheProposals.vue";
import TheWorkAreas from "@/components/pages/LandingPage/TheWorkAreas.vue";
import HowWeWork from "@/components/pages/LandingPage/HowWeWork.vue";
import TheBenefits from "@/components/pages/LandingPage/TheBenefits.vue";
import BannerForm from "@/components/pages/LandingPage/BannerForm.vue";
</script>
