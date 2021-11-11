import { title } from "process"
import { htmlElement } from "./util"

/** the list of support inherited base values, those properties semantics that all format standards support so they can be defaulted to a "preset value"  */
export enum Presets {
  title = 'title',
  description = 'description'
};
interface Preset {
  title: Presets,
  description: string
}
export enum Formats {
  standardHtml = 'standardHtml',
  schemaOrg = 'schema.org'
}
/**
 * describes each of the different format standards. instances of this will be SchemaOrg, OpenGraphProtocol, etc. 
 * Responsible of describing themselves and providing preset values
 */
interface Format {
  name: Formats
  url: string
  description: string
  entries: Entry[]
  /** each entry gives a html segment and this method is responsible of joining */
  buildHtml(values: { [name: string]: any }): string
}

interface Entry<Value = string> {
  format: Formats
  name: string
  description: string
  presets: Presets[]
  buildHtml(value: Value): string
}

class StandardHtmlFormat implements Format {
  name = Formats.standardHtml
  url = 'https://html.spec.whatwg.org/multipage/semantics.html#standard-metadata-names'
  description = 'TODO'
  entries = [
    {
      format: Formats.standardHtml,
      name: 'title',
      description: `Document's title`,
      presets: [Presets.title],
      buildHtml(value) {
        return htmlElement({ name: 'title', innerHTML: value })
      }
    }
  ]
  buildHtml(values) {
    return this.entries
      .filter(entry => values[entry.name])
      .map(entry => entry.buildHtml(values[entry.name]))
      .join('\n')
  }
}

export function main() {
  console.log(new StandardHtmlFormat().buildHtml({
    title: 'test1'
  }));
}
main();

// const schemaOrg: Format  = {
//   name: Formats.schemaOrg,
//   url: 'schema.org',
//   description: 'TODO',
//   getValue(key: string) {
//     if(key===Presets.name) {
//     }
//     throw 'implement me please'
//   }
// }

