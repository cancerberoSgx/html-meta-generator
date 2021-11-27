import { notFalsy } from 'misc-utils-of-mine-generic';
import { OpenGraphProtocol } from './format/openGraphProtocol';
import { StandardHtmlFormat } from './format/standardHtmlFormat';
import { Entry, Format, FormatConfig, Formats, Values } from './types';

export function getFormat(f: Formats): Format {
  if (f.toLocaleLowerCase() === Formats.standardHtml) {
    return new StandardHtmlFormat();
  } else if (f.toLocaleLowerCase() === Formats.openGraphProtocol) {
    return new OpenGraphProtocol();
  } else {
    throw 'format not found ' + f;
  }
}

export function getAllFormats(): Formats[] {
  return [Formats.standardHtml, Formats.openGraphProtocol];
}

export function mapEntryValue(entry: Entry, { values }: FormatConfig) {
  let value = values[entry.name]
  if (!value) {
    const preset = Object.keys(values).find(v => (entry.presets || []).find(p => p === v))
    value = values[preset]
  }
  return value && entry.buildHtml(value)
}

export function buildHtml(config: FormatConfig) {
  return this.entries
    .map(entry => mapEntryValue(entry, config))
    .filter(notFalsy)
    // .join('SEBA222222')
    .join(config.entrySeparator || '')
}