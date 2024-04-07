import axios from "axios";

export default {
  methods: {
    gettheApi(api) {
      return axios.get(api).then((response) => response.data);
    },
    // gettheApi(api) {
    //   return this.$http.get(api).then((response) => response);
    // },
    // posttheApi(api, data) {
    //   return this.$http.post(api, data).then((response) => response);
    // },
    // puttheApi(api, data) {
    //   return this.$http.put(api, data).then((response) => response);
    // },
    // deletetheApi(api, data) {
    //   return this.$http.delete(api, data).then((response) => response);
    // },
  },
};
