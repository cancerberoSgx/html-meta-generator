import { buildHtml } from "../formats";
import { Format, Formats, Presets } from "../types";
import { metaProperty } from "../util";

export class OpenGraphProtocol implements Format {
  name = Formats.openGraphProtocol;
  url = 'https://ogp.me/';
  description = 'enables any web page to become a rich object in a social graph.';

  // <meta data-react-helmet="true" property="fb:app_id" content="464891386855067">
  // <meta data-react-helmet="true" property="og:description"
  //   content="With 55 billion matches to date, Tinder® is the world’s most popular dating app, making it the place to meet new people.">
  // <meta data-react-helmet="true" property="og:image" content="https://tinder.com/static/tinder.png">
  // <meta data-react-helmet="true" property="og:image:width" content="1200">
  // <meta data-react-helmet="true" property="og:image:height" content="1200">
  // <meta data-react-helmet="true" property="og:site_name" content="Tinder">
  // <meta data-react-helmet="true" property="og:title" content="Tinder | Dating, Make Friends &amp; Meet New People">
  // <meta data-react-helmet="true" property="og:type" content="website">
  // <meta data-react-helmet="true" property="og:url" content="https://tinder.com">
  // <meta data-react-helmet="true" property="og:locale" content="en_US">
  entries = [
    {
      name: 'og:title',
      description: `The title of your object as it should appear within the graph, e.g., "The Rock"`,
      presets: [Presets.title],
      buildHtml(value) {
        return metaProperty('og:title', value)
      }
    },
    {
      name: 'og:description',
      description: `A one to two sentence description of your object.`,
      presets: [Presets.description],
      buildHtml(value) {
        return metaProperty('og:description', value)
      }
    },
  ];
  buildHtml = buildHtml
}
