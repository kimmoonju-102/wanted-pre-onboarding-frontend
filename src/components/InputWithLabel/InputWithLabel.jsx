export function InputWithLabel({label, errorMessage, ...rest}) {
  return(
    <div>
      <label>{label}</label>
      <input {...rest}/>
      <span>{errorMessage}</span>
    </div>
  )
}
