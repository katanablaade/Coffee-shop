<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <link-views-component :link="links.header.link" classItem="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </link-views-component>

      <link-views-component
        v-for="link in links.other"
        :key="link.id"
        :text="link.text"
        :link="link.link"
        classItem="header__item"
      />
    </ul>
  </header>
</template>

<script>
import LinkViewsComponent from './LinkViewsComponent.vue';

export default {
  components: { LinkViewsComponent },

  data() {
    return {
      links: {
        header: {
          id: 0,
          link: '/',
          icon: 'Logo.svg',
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
