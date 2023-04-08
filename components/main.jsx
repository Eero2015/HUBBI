import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import App1 from './app1'
import Journal from '../travel-journal/journal'
import Meme from '../meme-generator/components/meme'
import Form from './form'
import SignUp from './signup'
/*import Api from './apicall'
import Window from './windowTracker.jsx'
import Facts from '../react fun facts/reactfun'
import Notes from '../notes app/notes-app' */
import Tenzies from '../tenzies-game/tenzieApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
    <Tenzies />
  </React.StrictMode>
)
