import { enumKeys } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { Format, mainPrint, getAllFormats, getFormat, Presets } from '../../src/'

const Format = (props: { format: Format }) => {
  return <div>
    <h4>{props.format.name}</h4>
    <p>{props.format.description}</p>
  </div>
}

interface AppState {

}
const initialState: AppState = {
  presets: {
    [Presets.title]: '',
    [Presets.description]: '',
  }
}
let state: AppState
let setState: (s: AppState)=>void

const PresetsSection = (props: {}) =>{
  return <>
    <h4>Presets</h4>
    <ul>
    {enumKeys(Presets).map(preset=><li>
      <label>{preset}<input placeholder={preset} onChange={e=>{
        console.log('change');
      }}></input></label>
    </li>)}
    </ul>
    <h4>Formats</h4>
  </>
}
const Main: React.FC = () => {
  const [appState, setAppState] = React.useState(initialState)
  state = appState
  setState = setAppState
  return <div>
    <PresetsSection/>
    <ul>
      {getAllFormats().map(getFormat).map(format => <Format format={format} />)}
    </ul>
    <pre>
      {mainPrint({
        values: {
          title: 'cool one',
          description: 'wts app fellow'
        }
      })}
    </pre>
  </div>
}

ReactDOM.render(<Main />, document.getElementById('root'));
