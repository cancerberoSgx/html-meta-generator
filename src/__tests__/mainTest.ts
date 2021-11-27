import { mainPrint, MainPrintConfig } from "..";

describe('main', () => {
  function test(config: MainPrintConfig, expected: string) {
    const s = mainPrint(config)
    console.log((s));
    
    expect(s).toBe(expected)
  }
  it('title simple 1', () => {
    test({
      values: {
        title: 'cool one',
        description: 'test description'
      }
    }, '<title>cool one</title><meta name="description" content="test description"/><meta property="og:title" content="cool one"/><meta property="og:description" content="test description"/>')
  })
  it('separators', () => {
    test({
      values: {
        title: 'cool one',
        description: 'test description'
      },
      entrySeparator: '\n',
      formatSeparator: '\n',
    }, `
<title>cool one</title>
<meta name="description" content="test description"/>
<meta property="og:title" content="cool one"/>
<meta property="og:description" content="test description"/>
`.trim())
  })
})
