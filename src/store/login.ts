import loginApi from '@/api/login'

export default {
  namespace: 'login',
  state: {
    userInfor: {}
  },
  subscriptions: {
    setup ({ dispatch }) {
      dispatch({ type: 'fetchGuide', payload: {} })
    }
  },
  effects: {
    // 异步方法, 在这里可以用put调用同步的方法
    // generator  这里的方法第二个参数都是{call, put }, call调用异步方法, put 可以调用reducers中的方法
    * dologin ({ payload: { guidelineId } }, { call, put }) {
      const { rows } = yield call(loginApi.login, { guidelineId })
      yield put({
        type: 'userSave', // 方法名
        payload: { userInfor: rows } // 参数
      })
    }
  },
  reducers: { // 同步方法
    userSave (state, { payload: { userInfor } }) {
      return { ...state, userInfor }
    }
  }
}
