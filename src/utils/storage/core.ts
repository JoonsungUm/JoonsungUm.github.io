function isEmpty(storage: any) {
  return !storage || storage === {}
}

export function getValueFrom(storage: any, key: any) {
  if (isEmpty(storage)) {
    return
  }
  const rawData = storage.getItem(key)

  if (!rawData) {
    return
  }
  return JSON.parse(rawData)
}

export function setValueTo(storage: any, key: any, data: any) {
  if (isEmpty(storage)) {
    return
  }
  return storage.setItem(key, JSON.stringify(data))
}
