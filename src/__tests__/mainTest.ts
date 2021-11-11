import { mainPrint } from "..";

describe('main', () => {
  function test(config, expected: string) {
    const s = mainPrint(config)
    expect(s).toBe(expected)
  }
  it('title simple 1', () => {
    test({
      values: {
        title: 'cool one',
        description: 'wts app fellow'
      }
    }, '<title>cool one</title><meta name="description" name="description"/>')
  })
})
