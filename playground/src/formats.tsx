import { format } from 'path'
import * as React from 'react'
import { Entry, Format, getAllFormats, getFormat, Presets } from '../../src'
import { AppState, useAppState } from './state'

export const FormatsSection = () => {
  return <ul>
    {getAllFormats().map(getFormat).map(format => 
      <Format key={format.name} format={format} />
    )}
  </ul>
}
const Format = (props: { format: Format }) => {
  const { state, setState } = useAppState();
  return <div>
    <h4><a href={props.format.url}>{props.format.name}</a></h4>
    <p>{props.format.description}</p>
    <ul>
      {props.format.entries.map(entry=><li style={{paddingBottom: 10}}>
        <strong>{entry.name}</strong> ({entry.description})<br/>
        <input type="text" aria-label={`${format.name}-${entry.name}`} defaultValue={getEntryDefaultValue(entry, state, 'html')}/>
      </li>)}
    </ul>
  </div>
}

/** provides input defaultValue for given presents and format entry according to store */
export function getEntryDefaultValue(entry: Entry, state: AppState, formatStateName: 'html') {
  if ((entry.presets || []).includes(Presets.title)) {
    return state.presets.title
  } 
  if ((entry.presets || []).includes(Presets.description)) {
    return state.presets.description
  } 
  else {
    return state.formats[formatStateName][entry.name] as string
  }
}
