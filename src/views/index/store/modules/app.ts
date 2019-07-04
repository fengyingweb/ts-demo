const app = {
  state: {
    count: 0,
  },

  getters: {
    currentCount(state: any) {
      return state.count;
    },
  },

  mutations: {
    addCount(state: any): void {
      state.count++;
    },

    decreaseCount(state: any): void {
      state.count--;
    },
  },

  actions: {},
};

export default app;
