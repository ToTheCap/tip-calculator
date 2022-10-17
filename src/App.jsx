import { useState } from 'react'
import logo from './assets/logo.svg'
import dollarIcon from './assets/icon-dollar.svg'
import personIcon from './assets/icon-person.svg'
import Input from './components/Input'
import Tip from './components/Tip'
import Result from './components/Result'

const App = () => {
  const [bill, setBill] = useState('')
  const [numOfPeople, setNumOfPeople] = useState('')
  const [tip, setTip] = useState('')

  function onChange(e, stateSetter) {
    stateSetter(e.target.value)
  }

  function validateInput(input) {
    if (input.length > 0) {
      return Number(input.trim()) > 0
    }
    return true
  }

  function reset() {
    setBill('')
    setNumOfPeople('')
    setTip('')
  }

  return (
    <>
      <img src={logo} alt='logo' className='logo' />
      <div className='App'>
        <div className='input-section'>
          <Input
            text={"Bill"}
            htmlFor={"bill"}
            icon={dollarIcon}
            stateValue={bill}
            stateSetter={setBill}
            isInputValid={validateInput(true)}
            handleChange={onChange} />
          <Tip
            tip={tip}
            setTip={setTip}
            handleChange={onChange} />
          <Input
            text={"Number of Person"}
            htmlFor={"number-of-person"}
            icon={personIcon}
            stateValue={numOfPeople}
            stateSetter={setNumOfPeople}
            isInputValid={validateInput(numOfPeople)}
            handleChange={onChange} />
        </div>
        <Result
          bill={bill}
          numOfPeople={numOfPeople}
          tip={tip}
          handleClick={reset} />
      </div>
    </>
  )
}

export default App