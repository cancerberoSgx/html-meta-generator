import { buildHtml } from "../formats";
import { Format, Formats, Presets } from "../types";
import { htmlElement, metaName } from "../util";

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
        return htmlElement({ name: 'title', innerHTML: value })
      }
    },
    {
      name: 'description',
      description: `The value must be a free-form string that describes the page. The value must be appropriate for use in a directory of pages, e.g. in a search engine.`,
      presets: [Presets.description],
      buildHtml(value) {
        return metaName('description', value)
      }
    },
    {
      name: 'keywords',
      description: `The value must be a set of comma-separated tokens, each of which is a keyword relevant to the page`,
      buildHtml(value) {
        return metaName('keywords', value)
      }
    },
    {
      name: 'author',
      description: `The value must be a free-form string giving the name of one of the page's authors.`,
      buildHtml(value) {
        return metaName('author', value)
      }
    }
    // TODO: generator, referrer, theme-color, color-scheme
  ];
  buildHtml = buildHtml
}
