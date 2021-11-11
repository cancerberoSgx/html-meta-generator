
export interface HtmlElementConfig {
  name: string
  attributes?: { name: string, value: string }[]
  children?: HtmlElementConfig[]
  innerHTML?: string
}
/**
 * ```
 * htmlElement({
      name: 'a',
      attributes: [{name: 'href', value: 'foo.com'}, {name: 'id', value: 'clickMe'}],
      innerHTML: 'click me'
    })
  ```
 * will return something like: 
 * 
 * ```
 * <a href="foo.com" id="clickMe">click me</a>
 * ```
 * 
 * TODO: indentLevel
 */
export function htmlElement(config: HtmlElementConfig): string {
  let s = `<${config.name}`
  if (config.attributes) {
    // TODO: escape a.value
    s += ' ' + config.attributes.map(a => `${a.name}="${a.value}"`).join(' ')
  }
  s += '>'
  if (config.children) {
    const children = config.children.map(c => htmlElement(c))
    s += `${children.join('')}`
  }
  s += config.innerHTML || ''
  s += `</${config.name}>`
  return s
}
