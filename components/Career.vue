<template>
  <div>
    <div>
      <h2>Way of life</h2>
      <p>
        年の部分の背景透明にしているけど初期のparallax背景画像をスクロールして持ってくるのはなんで？Vuetify側の問題ぽいので放置。
      </p>
    </div>
    <div>
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
    </div>
  </div>
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
          'フロントはVB、サーバサイドはORACLEの構成。サーバにAP層がないため、今のリモートデスクトップのような方法でWindowsサーバに実行環境を構築しシンクライアントからメターフレームというXWindowのWindows版製品を使って利用していた。そんな糞構成なので当時の回線速度では帯域ネックスケーリングできず駄目なERPパッケージとして自分にとって反面教師になりました。'
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
          '通信関係のシステム部門で上流工程ぽいSEとして勤務してたおぼろげな記憶が。得られたスキルはゼロ？'
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
          'このあたりでスマホブーム到来。各社が自社サービスのアプリ化を急いたため、アプリ技術者バブル到来。iOSファーストでAndroidは動けばいいよレベルも多々あったなぁ。AndroidもiOSも初期はバージョンアップ毎にAPI、必要なパーミッションが変わりまくりでバージョンアップ対応でも美味しい作業でした。'
      },
      {
        color: 'cyan',
        year: '2016-',
        action: 'WEBディレクター的な雑用・雑務',
        details:
          'ネイティブアプリ市場がObjectiveC→Swift／Java→Kotlinを経てJS系のクロスプラットフォームに移行しJava＋Androidはあまり需要がなくなって行く。JS系クロスプラットフォームはnode系WEBページ作成技術が前提となるので、そちら方面へのスキルシフト開始。WEBページ作成/GA設定/プレスページ作成・・・node,Vue等など職業不定・無職で現在に至る。'
      }
    ]
  })
}
</script>

<style scoped>
* {
  /* background by SVGBackgrounds.com */
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'%3E%3Cstop offset='0' stop-color='%238f7846'/%3E%3Cstop offset='1' stop-color='%23e3be6f'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'%3E%3Cstop offset='0' stop-color='%238f8f8f'/%3E%3Cstop offset='0.09' stop-color='%23b3b3b3'/%3E%3Cstop offset='0.18' stop-color='%23c9c9c9'/%3E%3Cstop offset='0.31' stop-color='%23dbdbdb'/%3E%3Cstop offset='0.44' stop-color='%23e8e8e8'/%3E%3Cstop offset='0.59' stop-color='%23f2f2f2'/%3E%3Cstop offset='0.75' stop-color='%23fafafa'/%3E%3Cstop offset='1' stop-color='%23FFFFFF'/%3E%3C/linearGradient%3E%3Cfilter id='c' x='0' y='0' width='200%25' height='200%25'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='12' /%3E%3C/filter%3E%3C/defs%3E%3Cpolygon fill='url(%23a)' points='0 174 0 0 174 0'/%3E%3Cpath fill='%23000' fill-opacity='.5' filter='url(%23c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/%3E%3Cpath fill='url(%23b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top left;
}

span {
  background-color: rgba(0, 0, 0, 0);
}
</style>
