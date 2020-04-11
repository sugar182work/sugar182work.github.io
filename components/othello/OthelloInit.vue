<template>
  <div class="my-2">
    <v-btn x-large color="success" @click="initialize">最初から</v-btn>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('othellodata', ['initialize']),
  },
}
</script>
