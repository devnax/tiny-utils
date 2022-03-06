export const uid = () => Math.random().toString(36).substring(2)
export const isType = (val: any, t: string) => typeof val === t
export const isObject = (val: any) => isType(val, 'object') && val !== null && !Array.isArray(val) ? true : false
export const isArray = (val: any) => isType(val, 'object') && Array.isArray(val) ? true : false
export const isString = (val: any) => isType(val, 'string') ? true : false
export const isNumber = (val: any) => isType(val, 'number') ? true : false
export const isFunction = (val: any) => isType(val, 'function') ? true : false
export const isUndefine = (val: any) => val === undefined ? true : false
export const isNull = (val: any) => val === null ? true : false
export const inArray = (item: any, arr: any[]) => isArray(arr) && arr.indexOf(item) != -1 ? true : false

export const isEmpty = (val: any) => {
  if(isObject(val)){
    return Object.keys(val).length ? true : false
  }else if(isArray(val)){
    return val.length ? true : false
  }else if(isString(val)){
    return val.trim().length ? true : false
  }
  return !val && true
}