<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <link-views-component
              :link="links.footer.link"
              classItem="footer__item"
            >
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                :alt="links.footer.icon"
              />
            </link-views-component>

            <link-views-component
              v-for="link in links.other"
              :key="link.id"
              :text="link.text"
              :link="link.link"
              classItem="footer__item"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import LinkViewsComponent from './LinkViewsComponent.vue';

export default {
  components: { LinkViewsComponent },
  computed: {
    links() {
      return this.$store.getters['getFooterLinks'];
    },
  },
};
</script>
