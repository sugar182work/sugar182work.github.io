<template>
  <v-btn
    ma-1
    fab
    :color="getColor"
    :disabled="isNoPush"
    small
    dark
    @click="pushBtn()"
  >
    <!-- {{ ox }} : {{ oy }} -->
  </v-btn>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  props:
    //親からもらった座標位置
    ['ox', 'oy'],
  data() {
    return {
      color: 'black',
      isNoPush: false,
      coordinate: {
        tmpox: this.ox, // 親からの座標をposに格納しておく
        tmpoy: this.oy
      }
    }
  },
  computed: {
    isPushState() {
      return true
    },

    getColor() {
      //console.log('色発火')

      let storecoordinateData = this.getStorecoordinateData[this.ox][this.oy]
      //console.log(storecoordinateData)
      switch (storecoordinateData) {
        case 0:
          return '#000'
        case 1:
          return '#FFF'
        default:
          return 'rgba(0, 0, 0, 0)'
      }
    },

    ...mapState('othellodata', { getStorecoordinateData: 'coordinateData' })
  },
  methods: {
    pushBtn: function() {
      const pos = { ox: this.ox, oy: this.oy }
      this.$store.dispatch('othellodata/putStone', pos)
    }
  }
}
</script>
