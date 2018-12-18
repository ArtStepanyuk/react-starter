import axios from 'axios'
import { ITEMS_HAVE_ERROR, ITEMS_ARE_LOADING, ITEMS_ARE_LOADED } from '../constants'

export function itemsHaveError(bool) {
  return {
    type: ITEMS_HAVE_ERROR,
    payload: bool
  }
}

export function itemsAreLoading(bool) {
  return {
    type: ITEMS_ARE_LOADING,
    payload: bool
  }
}

export function itemsAreLoaded(items) {
  return {
    type: ITEMS_ARE_LOADED,
    payload: items
  }
}

export function fetchData(url) {
  return async dispatch => {
    dispatch(itemsAreLoading(true))
    try {
      const result = await axios.get(url)
      dispatch(itemsAreLoaded(result.data))
      dispatch(itemsAreLoading(false))
      dispatch(itemsHaveError(false))
    } catch (error) {
      dispatch(itemsAreLoading(false))
      dispatch(itemsHaveError(true))
    }
  }
}
