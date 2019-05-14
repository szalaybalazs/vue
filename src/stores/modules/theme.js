const state = {
  selectedTheme: 'dark',  // light | dark
  lightThemeColors: {
    header: {
      backgroundColor: '#c9d5e1'
    },
    themePopup: {
      backgroundColor: '#2F3335'
    },
  },
  darkThemeColors: {
    header: {
      backgroundColor: '#2F3335',
      color: 'white'
    },
    body: {
      backgroundColor: '#4D6D7C',
    },
    todoItem: {
      color: '#E1ECF2'
    },
    empty: {
      color: '#E1ECF2'
    },
    theme: {
      backgroundColor: '#F2FAFF'
    },
    themeIcon: {
      filter: 'invert(0) brightness(200)',
      opacity: .6
    },
    themePopup: {
      backgroundColor: '#E1ECF2',
      color: '#2F3335'
    },
  },
};

const getters = {
  getColors: state => state.selectedTheme === 'light' ? state.lightThemeColors : state.darkThemeColors,
  getHeaderStyle: state => {
    if (state.selectedTheme === 'light') {
      return state.lightThemeColors.header
    }
    return state.darkThemeColors.header;
  },
  isDark: state => state.selectedTheme === 'dark'
};

const actions = {
  toggleTheme: ({ commit }) => commit('toggleTheme'),
  setTheme: ({ commit, state }, theme) => state.selectedTheme !== theme && commit('toggleTheme'),
};  

const mutations = {
  toggleTheme: (state) => {
    state.selectedTheme = state.selectedTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', state.selectedTheme);
  }
};

export default {
  state, 
  getters,
  actions,
  mutations
}