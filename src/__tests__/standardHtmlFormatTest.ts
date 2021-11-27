import { StandardHtmlFormat } from "../format/standardHtmlFormat"

describe('StandardHtmlFormat', () => {
  function test(values, expected) {
    const s = new StandardHtmlFormat().buildHtml({values})
    expect(s).toBe(expected)
  }
  it('title simple 1', () => {
    test({ title: 'test1', description: 'desc1', keywords: 'a,b,c', author: 'Martin' }, '<title>test1</title><meta name="description" content="desc1"/><meta name="keywords" content="a,b,c"/><meta name="author" content="Martin"/>')
    // console.log(
    //   new StandardHtmlFormat().buildHtml({
    //     title: 'test1',
    //     description: 'desc1'
    //   })
    // )
  })
})
