import * as vue from 'vue'

declare module 'vue' {
  interface HTMLAttributes {
    flex?: boolean
    fill?: string
    font?: string
    grid?: boolean
    block?: boolean
    fixed?: boolean
    relative?: boolean
    absolute?: boolean
    truncate?: boolean
    shadow?: boolean
    'focus:shadow'?: boolean
    w?: string
    h?: string
    b?: string
    z?: string
    bg?: string
    to?: string
    from?: string
    top?: string
    right?: string
    bottom?: string
    left?: string
    rounded?: string
    text?: string
    before?: string
    after?: string
  }
}