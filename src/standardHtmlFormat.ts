import { Format, Formats, Presets } from "./types";
import { htmlElement } from "./util";

export class StandardHtmlFormat implements Format {
  name = Formats.standardHtml;
  url = 'https://html.spec.whatwg.org/multipage/semantics.html#standard-metadata-names';
  description = 'TODO';
  entries = [
    {
      name: 'title',
      description: `Document's title`,
      presets: [Presets.title],
      buildHtml(value) {
        return htmlElement({ name: 'title', innerHTML: value });
      }
    },
    {
      name: 'description',
      description: `TODO: description is very important for google SEO`,
      presets: [Presets.description],
      buildHtml(value) {
        return htmlElement({ name: 'meta', attributes: [{name: 'name', value: 'description'}, {name: 'name', value: 'description'}] });
      }
    }
  ];
  buildHtml(values) {
    return this.entries
      .filter(entry => values[entry.name])
      .map(entry => entry.buildHtml(values[entry.name]))
      .join('');
  }
}
