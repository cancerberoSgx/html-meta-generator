import { mainPrint, MainPrintConfig } from "..";

describe('main', () => {
  function test(config: MainPrintConfig, expected: string) {
    const s = mainPrint(config)
    expect(s).toBe(expected)
  }
  it('title simple 1', () => {
    test({
      values: {
        title: 'cool one',
        description: 'wts app fellow'
      }
    }, '<title>cool one</title><meta name="description" content="wts app fellow"/><meta property="og:title" content="cool one"/><meta property="og:description" content="wts app fellow"/>')
  })
})
