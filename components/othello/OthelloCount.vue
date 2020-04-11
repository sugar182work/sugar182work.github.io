<template>
  <div class="text-cenetr">
    <v-progress-circular size="100" :value="(getCountBlack * 64) / 32"
      >黒:{{ getCountBlack }}</v-progress-circular
    >
    <v-progress-circular
      size="100"
      :value="(getCountWhite * 64) / 32"
      color="#888888"
      >白:{{ getCountWhite }}</v-progress-circular
    >
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('othellodata', ['getCountBlack']),
    ...mapGetters('othellodata', ['getCountWhite']),
  },
}
</script>
