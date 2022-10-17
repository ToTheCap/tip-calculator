const Input = ({
  htmlFor,
  text,
  icon,
  handleChange,
  stateValue,
  stateSetter,
  isInputValid
}) => {

  return (
    <div className='input-wrapper'>
      <label htmlFor={htmlFor}>
        {text}
        {!isInputValid && <span className='input-invalid-text'>Can't be zero</span>}
      </label>
      <div className='input-wrapper'>
        <img src={icon} alt={`${icon}`} className='input-icon' />
        <input
          type='number'
          id={htmlFor}
          name={htmlFor}
          placeholder={0}
          className={`input-box ${!isInputValid && 'input-invalid'}`}
          value={stateValue}
          onChange={(e) => handleChange(e, stateSetter)}
        />
      </div>
    </div >
  )
}

export default Input