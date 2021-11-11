import { StandardHtmlFormat } from './standardHtmlFormat';
import { Format, Formats } from './types';

export function getFormat(f: Formats): Format {
  if (f.toLocaleLowerCase() === Formats.standardHtml) {
    return new StandardHtmlFormat();
  } else {
    throw 'format not found ' + f;
  }
}
export function getAllFormats(): Formats[] {
  return [Formats.standardHtml];
}
