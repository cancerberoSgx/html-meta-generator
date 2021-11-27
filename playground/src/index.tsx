import { enumKeys } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { Format, mainPrint, getAllFormats, getFormat, Presets } from '../../src'

interface AppState {
  presets: {
    title: string,
    description: string
  }
}
interface BaseProps {
  state: AppState
  setState: (s: AppState)=>void
}
const initialState: AppState = {
  presets: {
    title: 'cool product',
    description: 'solves to ugly problem of you know what',
  }
}
let state: AppState
let setState: (s: AppState)=>void
const presetNames = enumKeys(Presets)

const Main: React.FC = () => {
  const [appState, setAppState] = React.useState(initialState)
  state = appState
  setState = setAppState
  const baseProps: BaseProps = {state, setState}
  return <div>
    <PresetsSection/>
    <ul>
      {getAllFormats().map(getFormat).map(format => <Format key={format.name} format={format} />)}
    </ul>
    <h4>Results</h4>
    <pre>
      {mainPrint({
        values: {
          title: state.presets.title,
          description: state.presets.description,
        },
      })}
    </pre>
  </div>
}

const Format = (props: { format: Format }) => {
  return <div>
    <h4>{props.format.name}</h4>
    <p>{props.format.description}</p>
  </div>
}

const PresetsSection = () => {
  return <>
    <h4>Presets</h4>
    <ul>
    {presetNames.map(preset=><li key={preset}>
      <label>{preset}
      <input placeholder={preset} defaultValue={state.presets[preset]} onChange={e=>{
        state.presets[preset] = e.target.value
        setState({...state})
        console.log('change preset '+e.target.value);
      }}></input>
      </label>
    </li>)}
    </ul>
    <h4>Formats</h4>
  </>
}

ReactDOM.render(<Main />, document.getElementById('root'));
