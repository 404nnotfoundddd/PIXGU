/* eslint-disable no-unused-vars */
/**
 * const data = ["11", "test", "tes", "1", "testing"] as const
 *
 * const uniqueData: UniqueArray<typeof data> = data
 *
 * https://stackoverflow.com/a/64519702
 */
export type UniqueArray<T> = T extends readonly [infer X, ...infer Rest]
  ? InArray<Rest, X> extends true
  ? ['Encountered value with duplicates:', X]
  : readonly [X, ...UniqueArray<Rest>]
  : T

type InArray<T, X> = T extends readonly [X, ...infer _Rest]
  ? true
  : T extends readonly [X]
  ? true
  : T extends readonly [infer _, ...infer Rest]
  ? InArray<Rest, X>
  : false
