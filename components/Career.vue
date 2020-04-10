<template>
  <v-timeline>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
      </template>
      <div class="py-4 mx-4">
        <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
          {{ year.action }}
        </h2>
        <div>
          {{ year.details }}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    years: [
      {
        color: 'blue',
        year: '多分2000年頃',
        action: 'ウッドランド株式会社（現ヒューチャーワン）入社３年で退職',
        details:
          '独自のERPシステムをカスタマイズする部署に配属。月300時間労働・残業は22時以降しかつかないブラックな状態で３年勤務。２年目からプロマネサブ的な仕事が出来たのは良い経験'
      },
      {
        color: 'cyan',
        year: '2000-2003',
        action: 'ERP開発',
        details:
          'フロントはVB、サーバサイドはORACLEの構成。サーバにAP層がないため、今のリモートデスクトップのような方法でWindowsサーバに実行環境を構築しシンクライアントからメターフレームで利用していた。そんな糞構成なので当時の回線速度ではスケーリングできず駄目なERPパッケージとして自分にとって反面教師になりました。'
      },
      {
        color: 'pink',
        year: '2005年頃',
        action: '結婚',
        details: 'あまり定かでないので、戸籍謄本を入手予定'
      },
      {
        color: 'blue',
        year: '2004-2006',
        action: '設計業務',
        details:
          '通信関係のシステム部門で上流工程ぽいSEとして勤務してたおぼろげな記憶が。'
      },
      {
        color: 'cyan',
        year: '2007-2010',
        action: 'JAVA開発',
        details:
          '大手製造業のシステム部門で社内システムのJava開発。SpringからSeaser2に乗り換えたりと当時の誤った判断はあったが、良い経験。このあたりからフロントはHTML化されAJAX（死語）でdojoライブラリなんかを利用していたなぁ'
      },
      {
        color: 'cyan',
        year: '2011-2015',
        action: 'androidアプリ開発',
        details:
          'このあたりでスマホブーム到来。各社が自社サービスのアプリ化を急いたため、アプリ技術者バブル到来。iOSファーストでAndroidは動けばいいよレベルも多々あったなぁ'
      },
      {
        color: 'cyan',
        year: '2016-',
        action: 'WEBディレクター的な雑用・雑務',
        details:
          'GA設定/WEBページ作成/プレスページ作成・・・node,Vue等など職業不定。'
      }
    ]
  })
}
</script>

<style scoped>
* {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23180d1c' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23261431' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23351947' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23451e5e' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23552277' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>
