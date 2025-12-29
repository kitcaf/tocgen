/**
 * 使用 Intl.Collator 支持 "Numeric" 模式，解决 10 排在 2 前面的问题
 */
export const naturalSorter = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base'
}).compare;