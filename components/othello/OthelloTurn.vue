<template>
  <div class="my-2">
    <v-btn x-large color="success" @click="changeTurn">{{ getTurnText }}</v-btn>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('othellodata', ['getTurnText']),
  },
  methods: {
    ...mapActions('othellodata', ['changeTurn']),
  },
}
</script>
