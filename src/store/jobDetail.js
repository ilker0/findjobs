export default {
  state: {
    jobDetail: null,
  },

  mutations: {
    setJobDetail(state, data) {
      state.jobDetail = data;
    },
  },

  actions: {
    getJobDetail({ commit }, id) {
      return new Promise((reject, resolve) => {
        fetch(
          "https://my-json-server.typicode.com/ilker0/jobs-api/details?jobId=" +
            id
        )
          .then((res) => res.json())
          .then((data) => {
            commit("setJobDetail", data);
            resolve();
          })
          .catch(() => reject());
      });
    },
  },

  getters: {
    detail: (state) => state.jobDetail,
  },
};
