import { ASYNC_ADD, ASYNC_SUB } from '../types/counter'
import { createAction } from 'redux-actions'

export const asyncAdd = createAction(ASYNC_ADD, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})

export const asyncSub = createAction(ASYNC_SUB, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})
