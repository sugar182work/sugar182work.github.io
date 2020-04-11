export const state = () => ({
  coordinateData: [
    [9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 1, 0, 9, 9, 9],
    [9, 9, 9, 0, 1, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9],
  ],
  turn: 0,
})

export const getters = {
  getCoordinateData: (state) => state.coordinateData,
  getTurn: (state) => {
    //console.log('turn:' + (state.tuen % 2))
    return state.tuen
  },
  getTurnText: (state) => {
    if (state.turn === 1) {
      return '白の手番です'
    } else {
      return '黒の手番です'
    }
  },
  getCountBlack: (state) => {
    return getters.count(state.coordinateData, 0)
  },
  getCountWhite: (state) => {
    return getters.count(state.coordinateData, 1)
  },
  // 石をカウントする変数
  count: (cd, turn) => {
    let ret = 0
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        if (cd[x][y] === turn) ret++
      }
    }
    return ret
  },

  //getColor: (state) => (x, y) => {
  //  const pos = state.coordinateData[x][y]
  //  return
  //},
}

export const actions = {
  // 石を置いたアクション
  putStone({ commit }, payload) {
    console.log('putStone')
    commit('commitStone', payload)
  },
  // ターンを変更するだけのアクション
  changeTurn({ commit }) {
    //console.log('hogehoge')
    commit('changeTurn')
  },
  // 初期化処理 stateをsession strageに格納するようにしたため初期化追加
  initialize({ commit }) {
    commit('initialize')
  },
}

export const mutations = {
  // stateを更新
  commitStone(state, payload) {
    console.log('commitStone')
    // ここにアルゴリズムを記載
    //console.log('turn:' + this.getTurn)

    // 空白のマス以外をクリックした場合抜ける
    if (state.coordinateData[payload.ox][payload.oy] != 9) return

    const othelloReverseFun = {
      sercchAll: (c, x, y, t) => {
        let ret = []
        ret.push(othelloReverseFun.search1(c, x, y, t))
        ret.push(othelloReverseFun.search2(c, x, y, t))
        ret.push(othelloReverseFun.search3(c, x, y, t))
        ret.push(othelloReverseFun.search4(c, x, y, t))
        ret.push(othelloReverseFun.search5(c, x, y, t))
        ret.push(othelloReverseFun.search6(c, x, y, t))
        ret.push(othelloReverseFun.search7(c, x, y, t))
        ret.push(othelloReverseFun.search8(c, x, y, t))
        return ret
      },
      // 上方向探索
      search1: (cd, posX, posY, turn) => {
        let ret = []
        let serchTurn = othelloReverseFun.getSerchTurn(turn)
        // 処理を開始する条件 １個上が探している色
        //console.log('serchTurn' + serchTurn)
        if (posX - 1 < 0) return
        if (cd[posX - 1][posY] === serchTurn) {
          for (let i = posX - 1; i > -1; i--) {
            if (cd[i][posY] === 9) break
            if (cd[i][posY] === turn) {
              //console.log('loop2-' + i)
              return ret
            }
            //console.log('loop1-' + i)
            ret.push({ x: i, y: posY })
          }
          return null
        }
      },
      // 右上方向探索
      search2: (cd, posX, posY, turn) => {
        let ret = []
        let serchTurn = othelloReverseFun.getSerchTurn(turn)
        // 処理を開始する条件 １個上が探している色
        if (posX - 1 < 0 || posY + 1 < 0) return
        if (cd[posX - 1][posY + 1] === serchTurn) {
          let j = posY
          for (let i = posX - 1; i > -1; i--) {
            j++
            console.log('3i:j' + i + ':' + j)
            if (j > 7) break
            if (cd[i][j] === 9) break
            if (cd[i][j] === turn) {
              //console.log('loop2-' + i)
              return ret
            }
            //console.log('loop1-' + i)
            ret.push({ x: i, y: j })
          }
          return null
        }
      },
      // 右方向探索
      search3: (cd, posX, posY, turn) => {
        let ret = []
        let serchTurn = othelloReverseFun.getSerchTurn(turn)
        // 処理を開始する条件 １個上が探している色
        if (posY + 1 > 7) return
        if (cd[posX][posY + 1] === serchTurn) {
          let i = posX
          for (let j = posY + 1; j < 8; j++) {
            //i++
            console.log('4i:j' + i + ':' + j)
            if (i > 7) break
            if (cd[i][j] === 9) break
            if (cd[i][j] === turn) {
              //console.log('loop2-' + i)
              return ret
            }
            //console.log('loop1-' + i)
            ret.push({ x: i, y: j })
          }
          return null
        }
      },
      // 右下方向探索
      search4: (cd, posX, posY, turn) => {
        let ret = []
        let serchTurn = othelloReverseFun.getSerchTurn(turn)
        // 処理を開始する条件 １個上が探している色
        if (posX + 1 > 7 || posY + 1 > 7) return
        if (cd[posX + 1][posY + 1] === serchTurn) {
          let i = posX
          for (let j = posY + 1; j < 8; j++) {
            i++
            console.log('i:j' + i + ':' + j)
            if (i > 7) break
            if (cd[i][j] === 9) break
            if (cd[i][j] === turn) {
              //console.log('loop2-' + i)
              return ret
            }
            //console.log('loop1-' + i)
            ret.push({ x: i, y: j })
          }
          return null
        }
      },
      // 下方向探索
      search5: (cd, posX, posY, turn) => {
        let ret = []
        let serchTurn = othelloReverseFun.getSerchTurn(turn)
        // 処理を開始する条件 １個上が探している色
        if (posX + 1 > 7) return
        if (cd[posX + 1][posY] === serchTurn) {
          let j = posY
          for (let i = posX + 1; i < 8; i++) {
            //j++
            console.log('5i:j' + i + ':' + j)
            //if (j > 7) break
            if (cd[i][j] === 9) break
            if (cd[i][j] === turn) {
              //console.log('loop2-' + i)
              return ret
            }
            //console.log('loop1-' + i)
            ret.push({ x: i, y: j })
          }
          return null
        }
      },
      // 左下方向探索
      search6: (cd, posX, posY, turn) => {
        let ret = []
        let serchTurn = othelloReverseFun.getSerchTurn(turn)
        // 処理を開始する条件 １個上が探している色
        if (posX + 1 > 7 || posY - 1 < 0) return
        if (cd[posX + 1][posY - 1] === serchTurn) {
          let j = posY
          for (let i = posX + 1; i < 8; i++) {
            j--
            console.log('6i:j' + i + ':' + j)
            if (j < 0) break
            if (cd[i][j] === 9) break
            if (cd[i][j] === turn) {
              //console.log('loop2-' + i)
              return ret
            }
            //console.log('loop1-' + i)
            ret.push({ x: i, y: j })
          }
          return null
        }
      },
      // 左方向探索
      search7: (cd, posX, posY, turn) => {
        let ret = []
        let serchTurn = othelloReverseFun.getSerchTurn(turn)
        // 処理を開始する条件 １個上が探している色
        if (posY - 1 < 0) return
        if (cd[posX][posY - 1] === serchTurn) {
          let i = posX
          for (let j = posY - 1; j > -1; j--) {
            //i--
            //console.log('7i:j' + i + ':' + j)
            //if (i < 0) break
            if (cd[i][j] === 9) break
            if (cd[i][j] === turn) {
              //console.log('loop2-' + i)
              return ret
            }
            //console.log('loop1-' + i)
            ret.push({ x: i, y: j })
          }
          return null
        }
      },
      // 左上方向探索
      search8: (cd, posX, posY, turn) => {
        let ret = []
        let serchTurn = othelloReverseFun.getSerchTurn(turn)
        // 処理を開始する条件 １個上が探している色
        if (posX - 1 < 0 || posY - 1 < 0) return
        if (cd[posX - 1][posY - 1] === serchTurn) {
          let i = posX
          for (let j = posY - 1; j > -1; j--) {
            i--
            //console.log('7i:j' + i + ':' + j)
            if (i < 0) break
            if (cd[i][j] === 9) break
            if (cd[i][j] === turn) {
              //console.log('loop2-' + i)
              return ret
            }
            //console.log('loop1-' + i)
            ret.push({ x: i, y: j })
          }
          return null
        }
      },
      // 探す石の色
      getSerchTurn: (turn) => {
        if (turn === 1) return 0
        if (turn === 0) return 1
      },
    }

    // ８方向探索して色を変更
    let counter = 0

    //serchs[1] = othelloReverseFun.search1(
    let serchs = othelloReverseFun.sercchAll(
      state.coordinateData,
      payload.ox,
      payload.oy,
      state.turn
    )
    //console.log(JSON.stringify(serchs))

    // 8方向探索した結果をまとめて色変更して変更数をカウント
    for (let i in serchs) {
      for (let j in serchs[i]) {
        state.coordinateData[serchs[i][j].x][serchs[i][j].y] = state.turn
        counter++
      }
    }
    console.log('counter' + counter)
    // 石の設置 変更した石があった場合のみ
    if (counter > 0) {
      state.coordinateData[payload.ox][payload.oy] = state.turn

      // dummyで意味のない配列を追加しないとstoreから画面までイベントが伝播しない
      // storeの制約
      const dummy = [9, 9, 9, 9, 9, 9, 9, 9]
      state.coordinateData.push(dummy)

      // consoleで状態確認
      //for (let x = 0; x < 8; x++) {
      //console.log(JSON.stringify(state.coordinateData[x]))
      //}

      // ターンを更新
      if (state.turn === 1) return (state.turn = 0)
      if (state.turn === 0) return (state.turn = 1)
    }
  },
  changeTurn(state) {
    // ターンを更新
    //console.log('changeTurn')
    if (state.turn === 1) return (state.turn = 0)
    if (state.turn === 0) return (state.turn = 1)
  },
  // 初期化処理 stateをsession strageに格納するようにしたため初期化追加
  initialize(state) {
    state.coordinateData = [
      [9, 9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 1, 0, 9, 9, 9],
      [9, 9, 9, 0, 1, 9, 9, 9],
      [9, 9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9, 9, 9, 9],
    ]
    state.turn = 0
  },
}
