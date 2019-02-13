import {
  setValueToSessionStorage,
  getValueFromSessionStorage,
} from './sessionStorage'
import {
  setValueToLocalStorage,
  getValueFromLocalStorage,
} from './localStorage'

const SESSION_STORAGE_KEY = '__felog_session_storage_key__'
const LOCAL_STORAGE_KEY = '__felog_local_storage_key__'

export function getCount(defaultValue: number): number {
  return (
    getValueFromSessionStorage(`${SESSION_STORAGE_KEY}/count`) || defaultValue
  )
}

export function setCount(val: number): number {
  return setValueToSessionStorage(`${SESSION_STORAGE_KEY}/count`, val)
}

export function getCategory(defaultValue: string): string {
  return (
    getValueFromSessionStorage(`${SESSION_STORAGE_KEY}/category`) || defaultValue
  )
}

export function setCategory(val: string): string {
  return setValueToSessionStorage(`${SESSION_STORAGE_KEY}/category`, val)
}

export function getData<T>(): T {
  return getValueFromLocalStorage(LOCAL_STORAGE_KEY)
}

export function setData<T>(val: T): T {
  return setValueToLocalStorage(LOCAL_STORAGE_KEY, val)
}
