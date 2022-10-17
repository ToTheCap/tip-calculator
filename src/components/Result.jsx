const Result = ({ bill, numOfPeople, tip, handleClick }) => {

  const isInputsValid = Number(numOfPeople.trim())

  let totalTip, tipPerPerson, totalPerPerson
  if (isInputsValid) {
    totalTip = (Number(bill) / 100) * Number(tip)
    tipPerPerson = totalTip / Number(numOfPeople)
    totalPerPerson = (Number(bill) + totalTip) / Number(numOfPeople)
  }

  return (
    <div className='result'>
      <div>
        <div className='result-box'>
          <div>
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>
          <p className='result-amount'>${tipPerPerson ? tipPerPerson.toFixed(2) : '0.00'}</p>
        </div>
        <div className='result-box'>
          <div>
            <p>Total</p>
            <span>/ person</span>
          </div>
          <p className='result-amount'>${totalPerPerson ? totalPerPerson.toFixed(2) : '0.00'}</p>
        </div>
      </div>
      <button
        className='reset'
        disabled={!isInputsValid}
        onClick={handleClick}
      >
        RESET
      </button>
    </div>
  )
}

export default Result