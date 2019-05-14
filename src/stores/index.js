import Vuex from 'vuex';
import Vue from 'vue';
import theme from './modules/theme';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    theme
  }
})
