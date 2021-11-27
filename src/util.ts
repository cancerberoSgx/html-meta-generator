import { htmlElement } from "misc-utils-of-mine-generic";

export function metaName(name: string, content: string) {
  return htmlElement({ name: 'meta', attributes: [{name: 'name', value: name}, {name: 'content', value: content}] });
}

export function metaProperty(property: string, content: string) {
  return htmlElement({ name: 'meta', attributes: [{name: 'property', value: property}, {name: 'content', value: content}] });
}
