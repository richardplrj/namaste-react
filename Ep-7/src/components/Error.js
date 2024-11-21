import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <div className="error">
      <h1>Oops!!!</h1>
      <p>Sorry, an upexpected error has occurred.</p>
      <p>
        <i className="error-msg">{error.data || error.statusText}</i>
      </p>
    </div>
  )
}

export default Error
