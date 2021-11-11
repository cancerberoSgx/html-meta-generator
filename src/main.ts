import { getAllFormats, getFormat } from './formats';
import { Formats, Values } from './types';

interface MainPrintConfig {
  /** if not given all supported formats will be printed */
  formats?: Formats[];
  values: Values
}

export function mainPrint(config: MainPrintConfig) {
  const result = (config.formats || getAllFormats())
    .map(getFormat)
    .map(format => format.buildHtml(config.values))
    .join('')
  return result
}
