import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div className='d-flex justify-content-center align-items-center Not-Found flex-column'>
    <h1 className='mb-4 display-3'>404 | Page Not Found </h1>
    <Link to='/'><button className='btn btn-dark shopping-btn mx-auto'>Go to Home</button></Link> 
    </div>
  )
}

export default NoMatch
