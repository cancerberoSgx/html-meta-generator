
export interface HtmlElementConfig {
  name: string
  attributes?: { name: string, value: string }[]
  children?: HtmlElementConfig[]
  innerHTML?: string
  /** by default, if there's no children or innerHTML we use a single-closing tag like `<tag/>`.  If this is true will force the format <tag></tag> always. */
  forceContent?: boolean
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
  const hasContent = config.forceContent || config.innerHTML || (config.children || []).length
  let s = `<${config.name}`
  if (config.attributes) {
    // TODO: escape a.value
    s += ' ' + config.attributes.map(a => `${a.name}="${a.value}"`).join(' ')
  }
  if (hasContent) {
    s += '>'
  }
  if (config.children) {
    const children = config.children.map(c => htmlElement(c))
    s += `${children.join('')}`
  }
  s += config.innerHTML || ''
  if (hasContent) {
    s += `</${config.name}>`
  } else {
    s += `/>`
  }
  return s
}

export function metaName(name: string, content: string) {
  return htmlElement({ name: 'meta', attributes: [{name: 'name', value: name}, {name: 'content', value: content}] });
}

export function metaProperty(property: string, content: string) {
  return htmlElement({ name: 'meta', attributes: [{name: 'property', value: property}, {name: 'content', value: content}] });
}
