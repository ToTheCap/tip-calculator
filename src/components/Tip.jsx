const Tip = ({ tip, setTip, handleChange }) => {
  const tipValues = ['5', '10', '15', '25', '50']

  return (
    <div className='tip-wrapper'>
      <label htmlFor='tip'>Select Tip %</label>
      <div className='tip-buttons'>
        {tipValues.map(value =>
          <button
            key={value}
            className={`tip-box ${value === tip && 'active-tip-box'}`}
            value={value}
            onClick={(e) => handleChange(e, setTip)}
          >
            {`${value}%`}
          </button>
        )}
        <input
          type='text'
          className='tip-box'
          placeholder='Custom'
          value={tipValues.includes(tip) && tip !== '5' ? '' : tip}
          onChange={(e) => handleChange(e, setTip)} />
      </div>
    </div>
  )
}

export default Tip