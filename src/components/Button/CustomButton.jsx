export function CustomButton({children, onClick, ...rest}) {
  return(
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  )
}