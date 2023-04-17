export function Button({children, onClick}) {
  return(
    <Button onClick={onClick}>
      {children}
    </Button>
  )
}