<template>
  <main>
    <div
      class="banner"
      :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big" v-if="product">
          {{ product.name }}
        </h1>
      </div>
    </div>
    <section class="shop" v-if="product && isLoading === false">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img class="shop__girl" alt="coffee_item" :src="product.image" />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__point">
              <span v-if="product.country">Country:</span>
              {{ product.country }}
            </div>
            <div class="shop__point">
              <span v-if="product.description">Description:</span>
              {{ product.description }}
            </div>
            <div class="shop__point">
              <span>Price: </span>
              <span class="shop__point-price">{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <spinner-component v-else></spinner-component>
  </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import CardItemComponent from '@/components/CardItemComponent.vue';
import TitlleViewsComponent from '@/components/TitlleViewsComponent.vue';
import SpinnerComponent from '@/components/SpinnerComponent.vue';

export default {
  components: {
    NavBarComponent,
    CardItemComponent,
    TitlleViewsComponent,
    SpinnerComponent,
  },
  mounted() {
    try {
      this.$store.isLoading = true;
      fetch(
        `http://localhost:3000/${this.$route.name}/${this.$route.params.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.$store.dispatch('setProductData', data);
        });
      this.$store.isLoading = false;
    } catch (error) {
      throw new Error('Ошибка получения данных', error);
    } finally {
      this.$store.isLoading = false;
    }
  },

  destroyed() {
    this.$store.product = null;
  },
  computed: {
    pageName() {
      return this.$route.name;
    },
    product() {
      return this.$store.getters['getProduct'];
    },
    isLoading() {
      return this.$store.getters['getIsLoading'];
    },
  },
};
</script>
