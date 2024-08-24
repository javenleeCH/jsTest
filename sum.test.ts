// sum.test.js
import { expect, test } from 'vitest'
import { Peng, sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('peng test', () => {
  let peng = new Peng('da peng');
  // @ts-ignore
  expect(peng.getName()).toBe('da peng');
})