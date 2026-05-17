import { Link } from 'react-router-dom';
import notpage from '../assets/error-404.png'

export default function NotFound() {
  return (
    <div className="
      rounded-2xl bg-base-100 py-20 text-center
      shadow-md">
      <div className='grid items-center justify-center mb-10'>
        <img src={notpage} alt=""/>
      </div>
      <h2 className="text-2xl font-bold text-error">Oops, page not found!</h2>
      <p className="mt-2 text-base-content/70 mb-4">
        The page you are looking for is not available.
      </p>
      <Link to="/">
        <button className='btn btn-primary'>Go Back!</button>
      </Link>
    </div>
  );
}
