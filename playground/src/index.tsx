import * as React from 'react'
import ReactDOM from 'react-dom'
import { mainPrint } from '../../src/main'
import { FormatsSection } from './formats'
import { PresetsSection } from './presets'
import { initialState, initState, useAppState } from './state'
import './styles.css'

const Main: React.FC = () => {
  const [appState, setAppState] = React.useState(initialState)
  initState(appState, setAppState)
  return <Body/>
}

const Body = ()=> {
  const {state, setState} = useAppState()
  const result = mainPrint({
    values: {
      title: state.presets.title,
      description: state.presets.description,
    },
    entrySeparator: '\n',
    formatSeparator: '\n',
  })
  return <>
    <PresetsSection />
   <FormatsSection/>
    <h4>Results</h4>
    <pre>
      {result}
    </pre>
  </>
}

ReactDOM.render(<Main />, document.getElementById('root'));
