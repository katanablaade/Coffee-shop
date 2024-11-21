<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <titlle-views-component :text="title" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_girl.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="row">
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
                @input="onSearch"
                v-model="searchValue"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label" @click="onReset">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn" @click="onSort('Brazil')">
                  Brazil
                </button>
                <button class="shop__filter-btn" @click="onSort('Kenya')">
                  Kenya
                </button>
                <button class="shop__filter-btn" @click="onSort('Columbia')">
                  Columbia
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <card-item-component
                v-for="card in coffee"
                :key="card.id"
                classItem="shop__item"
                :card="card"
                @onNavigate="navigate"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import CardItemComponent from '@/components/CardItemComponent.vue';
import TitlleViewsComponent from '@/components/TitlleViewsComponent.vue';

import { navigate } from '../mixins/navigate';
import debounce from 'debounce';

export default {
  components: { NavBarComponent, CardItemComponent, TitlleViewsComponent },
  data() {
    return {
      title: 'Our Coffee',
      name: 'coffee',
    };
  },
  computed: {
    coffee() {
      return this.$store.getters['getCoffee'];
    },
    searchValue: {
      set(value) {
        this.$store.dispatch('setSearchValue', value);
      },
      get() {
        return this.$store.getters['getSearchValue'];
      },
    },
  },
  mixins: [navigate],
  mounted() {
    fetch('https://my-json-server.typicode.com/katanablaade/Coffee-back/coffee')
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch('setCoffeeData', data);
      });
  },
  methods: {
    onSearch: debounce(function () {
      this.onSort(this.searchValue);
    }, 500),
    onSort(value) {
      fetch(
        `https://my-json-server.typicode.com/katanablaade/Coffee-back/coffee?q=${value}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.$store.dispatch('setCoffeeData', data);
        });
      // this.$store.dispatch('setSortValue', value);
    },
    onReset() {
      this.onSort('');
      this.searchValue = '';
    },
  },
};
</script>
