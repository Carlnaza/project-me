import { Redirect } from 'react-router-dom'

const LockedPage = (props) => {

  return (
    <>
      {
        localStorage.getItem('user') ?
          props.children
          :
          <Redirect to="/login" />
      }
    </>
  )
}

export default LockedPage