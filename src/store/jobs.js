export default {
  state: {
    jobList: [],
  },

  mutations: {
    setJobList(state, data) {
      state.jobList = data;
    },
  },

  actions: {
    getJobList({ commit }) {
      return new Promise((reject, resolve) => {
        fetch("https://my-json-server.typicode.com/ilker0/jobs-api/items")
          .then((res) => res.json())
          .then((data) => {
            commit("setJobList", data);
            resolve();
          })
          .catch(() => reject());
      });
    },
  },

  getters: {
    jobs: (state) => state.jobList,
  },
};
