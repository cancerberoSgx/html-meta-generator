import { getAllFormats, getFormat } from './formats';
import { Formats, Values } from './types';

export interface MainPrintConfig {
  /** if not given all supported formats will be printed */
  formats?: Formats[];
  values: Values
  /** separates each format section. Default empty string. */
  formatSeparator?: string
  /** separates each entry inside a format. Default empty string. */
  entrySeparator?: string
}

export function mainPrint(config: MainPrintConfig) {
  const result = (config.formats || getAllFormats())
    .map(getFormat)    
    .map(format => format.buildHtml(config.values))
    .join(config.formatSeparator||'')
  return result
}
