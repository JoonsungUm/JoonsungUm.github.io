export interface Post {
  node: string
}

export type EnumLiteralsOf<T extends object> = T[keyof T]
