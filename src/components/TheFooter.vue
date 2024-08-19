<template>
  <footer class="the-footer">
    <div class="the-footer__wrapper">
      <div class="the-footer__info">
       <p>A Better Career OÜ</p>
       <p>Reg number: 17035965</p>
       <p>VAT ID: EE102763229</p>
       <p>Address: Harju maakond, Tallinn, Lasnamäe linnaosa, Kivila tn 21-101, 13918</p>
      </div>
      <div class="the-footer__contacts">
        <ul class="the-footer__social">
          <li v-for="item of $tm('footer.socials')">
            <a :href="item.link" target="_blank">
              <svg-icon :name="item.id" />
            </a>
          </li>
        </ul>
        <div class="the-footer__item">
          <p>
            {{$t('footer.email.name')}}:
          </p>
          <a :href="'mailto:' + $t('footer.email.link')">
            {{$t('footer.email.link')}}
          </a>
        </div>
        <div class="the-footer__item">
          <base-button
              tag="a"
              :href="$t('footer.telegram_bot.link')"
              target="_blank"
              class="the-footer__telegram-bot"
          >
            {{$t('footer.telegram_bot.name')}}
          </base-button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss">
.the-footer {
  background: $black;
  padding: 40px 0;
  color: $white;

  &__title {
    font-size: 36px;
    font-weight: 900;
    width: 100%;
    margin-bottom: 32px;
  }

  &__wrapper {
    @include container;
    gap: 10px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 24px;

   @media (max-width: 768px) {
    flex-direction: column;
   }
  }

 &__info {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  @media (max-width: 768px) {
    & p {
     text-align: center;
     width: 100%;
    }
  }
 }

  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 8px;
  }

  &__telegram-bot {
    color: $white !important;
    text-decoration: none !important;
    width: fit-content !important;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 14px;
      width: 100%;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    width: 100%;

    & a {
      color: #1E90FF;
      text-decoration: underline;
    }
  }

  &__social {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 14px;

    & li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;

      & a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        & svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
