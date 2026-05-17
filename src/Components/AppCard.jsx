import { Link } from 'react-router-dom';
import { formatDownloads } from '../utils/formatterss';
import download from '../assets/fi_18110198.png';
import star from '../assets/fi_1828884.png'

export default function AppCard({ app }) {
  return (
    <Link
      to={`/app/${app.id}`}
      className="card card-compact bg-base-100 shadow-md 
      transition hover:-translate-y-1 hover:shadow-xl"
    >
      <figure className="flex aspect-square items-center 
        justify-center overflow-hidden bg-base-300 p-3">
        <img
          src={app.image}
          alt={app.title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </figure>
      <div className="card-body gap-2 p-4">
        <h3 className="card-title line-clamp-1 text-base">{app.title}</h3>
        <div className="flex items-center justify-between text-sm text-base-content/70">
          <button className='btn btn-soft rounded-2xl'>
            <img className='w-[12px] h-[12px]' src={download} alt="" />
            <span className='text-sm text-green-500'>{formatDownloads(app.downloads)}</span>
          </button>
          <button className='btn btn-active rounded-2xl'>
            <img className='w-[12px] h-[12px]'  src={star} alt="" />
            <span className='text-sm text-orange-500'>{app.ratingAvg}</span>
           
          </button>
          
        </div>
      </div>
    </Link>
  );
}
