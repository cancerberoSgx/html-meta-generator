/** the list of support inherited base values, those properties semantics that all format standards support so they can be defaulted to a "preset value"  */
export enum Presets {
  title = 'title',
  description = 'description'
}

// interface Preset {
//   title: Presets;
//   description: string;
// }
export enum Formats {
  standardHtml = 'standard-tml',
  schemaOrg = 'schema-org',
  openGraphProtocol='open-graph-protocol',
}
/**
 * describes each of the different format standards. instances of this will be SchemaOrg, OpenGraphProtocol, etc.
 * Responsible of describing themselves and providing preset values
 */
export interface Format {
  name: Formats;
  url: string;
  description: string;
  entries: Entry[];
  /** each entry gives a html segment and this method is responsible of joining */
  buildHtml(config: Values): string;
}
interface FormatConfig {
  values: Values
  entrySeparator?: string
}
export interface Entry<Value = string> {
  // format: Formats;
  name: string;
  description: string;
  presets?: Presets[];
  buildHtml(value: Value): string;
}
export type Values = { [name: string]: any; }
