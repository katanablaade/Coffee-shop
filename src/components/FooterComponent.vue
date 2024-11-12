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

  data() {
    return {
      links: {
        footer: {
          id: 0,
          link: '/',
          icon: 'Logo_black.svg',
        },
        other: [
          {
            id: 1,
            text: 'Our coffee',
            link: '/our-coffee',
          },
          {
            id: 2,
            text: 'For your pleasure',
            link: '/your-plesure',
          },
          {
            id: 3,
            text: 'Contact us',
            link: '/contacts',
          },
        ],
      },
    };
  },
};
</script>
