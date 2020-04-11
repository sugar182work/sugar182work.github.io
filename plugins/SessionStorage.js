import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'sugar182work.io', // your product name
      storage: window.sessionStorage
    })(store)
  })
}
