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
    <Car />
     {/* <CounterUpdateFunction />
      <ColorPicker />
      <Form />
      <Counter />
      <App />  */}
  </React.StrictMode>,
)
