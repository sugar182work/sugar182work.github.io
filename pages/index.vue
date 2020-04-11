<template>
  <div>
    <Top />
    <article>
      <Career />
    </article>
    <article>
      <OthelloBoard />
    </article>
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import Career from '~/components/Career.vue'
import OthelloBoard from '~/components/othello/OthelloBoard.vue'
export default {
  components: {
    Top,
    Career,
    OthelloBoard
  }
}
</script>
