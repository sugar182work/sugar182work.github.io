<template>
  <div>
    <v-switch v-model="reverse" label="Toggle reverse"></v-switch>
    <v-timeline :reverse="reverse" :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item v-for="n in 2" :key="n">
        <span slot="opposite">入社</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">ウッドランド株式会社（現ヒューチャーワン）入社</v-card-title>
          <v-card-text>独自のERPシステムをカスタマイズする部署に配属。月300時間労働・残業は22時以降しかつかないブラックな状態で３年勤務。２年目からプロマネサブ的な仕事が出来たのは良い経験</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-timeline :reverse="reverse" dense>
      <v-timeline-item v-for="n in 2" :key="n">
        <span slot="opposite">Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    reverse: true
  })
}
</script>