<template>
  <div class="the-logo">
    <router-link to="/" class="the-logo__link">
      Smart HR Agency
    </router-link>
  </div>
</template>

<style lang="scss">
.the-logo {
  width: fit-content;

  &__link {
    font-weight: 800;
    color: #000;
    font-size: 24px;
    transition: all .25s ease;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
