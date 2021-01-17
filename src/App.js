import logo from './assets/covid.svg'
import './App.css'

import Card from './components/Card'
import Select from './components/Select'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <img src={logo} className='App-logo' alt='logo' />
        </div>
        <div>
          <h3>COVID-19 afeta diferentes pessoas de diferentes maneiras.</h3>
          <br />

          <div className='App-ul'>
            <span>Sintomas mais comuns:</span>
            <ul>
              <li>febre</li>
              <li>tosse seca</li>
              <li>cansaço</li>
            </ul>
          </div>
        </div>
      </header>
      <body>
        <h2>Painel Coronavirus - Atualizado em: 17/01/2021 15:53:47</h2>
        <Select />
        <div className='App-div'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </body>
    </div>
  )
}

export default App
