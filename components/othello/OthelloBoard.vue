<template>
  <div>
    <v-card class="mx-auto" max-width="600">
      <h2>暇つぶしに一人オセロでもどうぞ</h2>

      <p>手詰まりになったら手番を変更してすすめてね</p>

      <OthelloCount />
      <OthelloTurn />
      <table>
        <template v-for="(xmap, idxx) in createOthelloMaps">
          <tr :key="idxx">
            <template v-for="(ymap, idxy) in xmap.oys">
              <td :key="idxy">
                <Stone v-bind:ox="xmap.ox" v-bind:oy="ymap.oy" />
              </td>
            </template>
          </tr>
        </template>
      </table>
      <OthelloInit />
    </v-card>
  </div>
</template>

<script>
import Stone from '~/components/othello/stone.vue'
import OthelloTurn from '~/components/othello/OthelloTurn.vue'
import OthelloCount from '~/components/othello/OthelloCount.vue'
import OthelloInit from '~/components/othello/OthelloInit.vue'

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  components: { Stone, OthelloTurn, OthelloCount, OthelloInit },
  data() {
    return {
      createOthelloMaps: [
        {
          ox: 0,
          oys: [
            { oy: 0 },
            { oy: 1 },
            { oy: 2 },
            { oy: 3 },
            { oy: 4 },
            { oy: 5 },
            { oy: 6 },
            { oy: 7 }
          ]
        },
        {
          ox: 1,
          oys: [
            { oy: 0 },
            { oy: 1 },
            { oy: 2 },
            { oy: 3 },
            { oy: 4 },
            { oy: 5 },
            { oy: 6 },
            { oy: 7 }
          ]
        },
        {
          ox: 2,
          oys: [
            { oy: 0 },
            { oy: 1 },
            { oy: 2 },
            { oy: 3 },
            { oy: 4 },
            { oy: 5 },
            { oy: 6 },
            { oy: 7 }
          ]
        },
        {
          ox: 3,
          oys: [
            { oy: 0 },
            { oy: 1 },
            { oy: 2 },
            { oy: 3 },
            { oy: 4 },
            { oy: 5 },
            { oy: 6 },
            { oy: 7 }
          ]
        },
        {
          ox: 4,
          oys: [
            { oy: 0 },
            { oy: 1 },
            { oy: 2 },
            { oy: 3 },
            { oy: 4 },
            { oy: 5 },
            { oy: 6 },
            { oy: 7 }
          ]
        },
        {
          ox: 5,
          oys: [
            { oy: 0 },
            { oy: 1 },
            { oy: 2 },
            { oy: 3 },
            { oy: 4 },
            { oy: 5 },
            { oy: 6 },
            { oy: 7 }
          ]
        },
        {
          ox: 6,
          oys: [
            { oy: 0 },
            { oy: 1 },
            { oy: 2 },
            { oy: 3 },
            { oy: 4 },
            { oy: 5 },
            { oy: 6 },
            { oy: 7 }
          ]
        },
        {
          ox: 7,
          oys: [
            { oy: 0 },
            { oy: 1 },
            { oy: 2 },
            { oy: 3 },
            { oy: 4 },
            { oy: 5 },
            { oy: 6 },
            { oy: 7 }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  background-color: forestgreen;
  border: black solid;
}
td {
  border: 1px black solid;
}
</style>
