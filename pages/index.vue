<template>
  <div>
    <Top />
    <article>
      <Career />
    </article>
  </div>
</template>

<script>
import Top from '~/components/Top.vue'
import Career from '~/components/Career.vue'

//import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Top,
    Career
  }
}
</script>
