import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Students  from './Students.jsx' 
import Counter, {CounterUpdateFunction} from './Components/Counter/Counter.jsx'
import Form from './Components/Form/Form.jsx'
import ColorPicker from './Components/ColorPicker/ColorPicker.jsx'
import Home from './Home.jsx'
import Car from './Components/Car/Car.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{display:'inline-flex'}}>
    <div style={{ backgroundColor: "yellow",border:'none', margin:0, height:'10em' }}><Car /></div>
    <div style={{ backgroundColor: "green", border:'none', margin:0, height:'10em' }}><Car /></div>
    </div>{/* <CounterUpdateFunction />
      <ColorPicker />
      <Form />
      <Counter />
      <App />  */}
  </React.StrictMode>,
)
