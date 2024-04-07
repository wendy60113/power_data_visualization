<template>
  <div></div>
</template>

<script>
import getApi from "@/mixins/getApi";

export default {
  mixins: [getApi],
  mounted() {
    this.goSearch();
  },
  methods: {
    goSearch() {
      this.gettheApi("data/opendata/apply/file/d006001/001.json").then(
        (res) => {
          console.log(res);
        }
      );
    },
  },
};
</script>
