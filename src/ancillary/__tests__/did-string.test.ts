import { describe, expect, test } from '@jest/globals'
import { isDIDString } from '../did-string.js'

describe('isDIDString', () => {
  test('ok', () => {
    expect(isDIDString('did:method:foo')).toBeTruthy()
  })
  test('not ok', () => {
    // @ts-ignore `null` goes against TS types
    expect(isDIDString(null)).toBeFalsy()
    // @ts-ignore `undefined` goes against TS types
    expect(isDIDString(undefined)).toBeFalsy()
    expect(isDIDString('')).toBeFalsy()
    expect(isDIDString('did:method')).toBeFalsy()
    expect(isDIDString('did:method:id#fragment')).toBeFalsy()
  })
})
