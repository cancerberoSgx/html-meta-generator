import { StandardHtmlFormat } from "../standardHtmlFormat"

describe('StandardHtmlFormat', () => {
  function test(values, expected) {
    const s = new StandardHtmlFormat().buildHtml(values)
    expect(s).toBe(expected)
  }
  it('title simple 1', () => {
    test({ title: 'test1', description: 'desc1' }, '<title>test1</title><meta name="description" name="description"/>')
    console.log(
      new StandardHtmlFormat().buildHtml({
        title: 'test1',
        description: 'desc1'
      })
    )
  })
})
