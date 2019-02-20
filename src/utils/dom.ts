const BODY = 'body'

export const getElements = (selector: string) =>
  document.querySelectorAll(selector)
export const getElement = (selector: string) => document.querySelector(selector)
export const addClass = (element: Element, className: string) =>
  element ? element.classList.add(className) : null
export const removeClass = (element: Element, className: string) =>
  element!.classList.remove(className)
export const hasClass = (element: Element, className: string) =>
  element!.classList.contains(className)
export const getBody = () => getElement(BODY)
export const addClassToBody = (className: string) =>
  addClass(getBody()!, className)
export const removeClassToBody = (className: string) =>
  removeClass(getBody()!, className)
export const hasClassOfBody = (className: string) =>
  hasClass(getBody()!, className)
export const getRect = (className: string) =>
  getElement(className)!.getBoundingClientRect()
export const getPosY = (className: string) => getRect(className)!.top

export const getDocumentHeight = () => document.documentElement.offsetHeight
