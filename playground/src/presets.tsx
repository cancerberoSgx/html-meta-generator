import { enumKeys } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { Entry, Presets } from '../../src'
import { AppState, useAppState } from './state'

export const PresetsSection = () => {
  const presetNames = enumKeys(Presets)
  const { state, setState } = useAppState()
  return <>
    <h4>Presets</h4>
    <ul>
      {presetNames.map(preset => <li key={preset}>
        <label>{preset}
          <input placeholder={preset} defaultValue={state.presets[preset]} onChange={e => {
            state.presets[preset] = e.target.value
            setState({ ...state })
            console.log('change preset ' + e.target.value)
          }}></input>
        </label>
      </li>)}
    </ul>
    <h4>Formats</h4>
  </>
}
