import { Item } from "@/models/itemModel";
import mutations from "@/store/mutations";
import { Commit } from "vuex";

const { SET_ITEM, UPDATE_ITEMS } = mutations;

interface State {
  items: Item[];
}

const itemsStore = {
  state: {
    items: [
      { element: { color: "green", square: true, value: 8 }, id: 0 },
      { element: { color: "blue", square: true, value: 2 }, id: 1 },
      { element: { color: "yellow", square: true, value: 6 }, id: 2 },
      { element: { color: "violet", square: true, value: 9 }, id: 3 },
      { element: { color: "red", square: true, value: 5 }, id: 4 },
      { element: { color: "orange", square: true, value: 1 }, id: 5 },
      { element: { color: "", square: false, value: 0 }, id: 6 },
      { element: { color: "", square: false, value: 0 }, id: 7 },
      { element: { color: "", square: false, value: 0 }, id: 8 },
      { element: { color: "", square: false, value: 0 }, id: 9 },
      { element: { color: "", square: false, value: 0 }, id: 10 },
      { element: { color: "", square: false, value: 0 }, id: 11 },
      { element: { color: "", square: false, value: 0 }, id: 12 },
      { element: { color: "", square: false, value: 0 }, id: 13 },
      { element: { color: "", square: false, value: 0 }, id: 14 },
      { element: { color: "", square: false, value: 0 }, id: 15 },
      { element: { color: "", square: false, value: 0 }, id: 16 },
      { element: { color: "", square: false, value: 0 }, id: 17 },
      { element: { color: "", square: false, value: 0 }, id: 18 },
      { element: { color: "", square: false, value: 0 }, id: 19 },
      { element: { color: "", square: false, value: 0 }, id: 20 },
      { element: { color: "", square: false, value: 0 }, id: 21 },
      { element: { color: "", square: false, value: 0 }, id: 22 },
      { element: { color: "", square: false, value: 0 }, id: 23 },
      { element: { color: "", square: false, value: 0 }, id: 24 },
    ] as Item[],
  },
  getters: {
    items: (state: State) => state.items,
  },
  mutations: {
    [SET_ITEM](state: State, item: Item) {
      let currentItem;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === item.id) {
          state.items[i] = item;
          break;
        }
      }
      console.log("CUR", currentItem);
    },
    [UPDATE_ITEMS](state: State, items: Item[]) {
      state.items = items;
    },
  },
  actions: {
    setitem({ commit }: { commit: Commit }, item: Item) {
      commit(SET_ITEM, item);
    },
    updateItems({ commit }: { commit: Commit }, items: Item[]) {
      commit(UPDATE_ITEMS, items);
    },
  },
};

export default itemsStore;
