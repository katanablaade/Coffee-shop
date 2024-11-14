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
  computed: {
    links() {
      return this.$store.getters['getHeaderLinks'];
    },
  },
};
</script>
