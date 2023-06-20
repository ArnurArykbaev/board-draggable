import { createStore } from "vuex";
import items from "./modules/items";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [
    createPersistedState({
      storage: localStorage,
    }),
  ],
  modules: {
    items,
  },
});
