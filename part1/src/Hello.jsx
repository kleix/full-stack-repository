const Hello = (props) => {
  const now = new Date()
  console.log('props', props)

  return (
    <div>
        <p>It is {now.toString()}</p>
        <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}
  
export default Hello