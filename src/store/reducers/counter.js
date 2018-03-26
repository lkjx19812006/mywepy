import { handleActions } from 'redux-actions'
import { ADD, SUB, ASYNC_ADD, ASYNC_SUB } from '../types/counter'

export default handleActions({
  [ADD](state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [SUB](state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_ADD](state, action) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [ASYNC_SUB](state) {
    return {
      ...state,
      num: state.num - 1
    }
  }
}, {
    num: 0,
    asyncNum: 0
  })