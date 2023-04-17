export function InputWithLabel({label, ...rest}) {
  return(
    <div>
      <label>{label}</label>
      <input {...rest}/>
    </div>
  )
}
