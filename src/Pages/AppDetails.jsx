import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import ReviewChart from '../components/ReviewChart';
import { getAppById } from '../data/appsDatas';
import useInstall from '../hooks/useInstall';
import { formatDownloads, formatReviews } from '../utils/formatterss';
import download from '../assets/fi_18110198.png'
import star from '../assets/fi_1828884.png'
import reviwe from '../assets/fi_17817684.png';
import appError from '../assets/App-Error.png';

export default function AppDetails() {
  const { id } = useParams();
  const app = getAppById(id);
  const { isInstalled, installApp } = useInstall();

  if (!app) {
    return (
      <div className="
      rounded-2xl bg-base-100 py-20 text-center
        shadow-md">
        <div className='grid items-center justify-center'>
          <img src={appError} alt=""/>
        </div>
        <h2 className="text-2xl font-bold text-error">OPPS!! APP NOT FOUND</h2>
        <p className="mt-2 text-base-content/70 mb-4">
          The App you are requesting is not found on our system.  please try another apps.
        </p>
        <Link to="/apps">
          <button className='btn btn-primary'>Go Back!</button>
        </Link>
      </div>
    );
  }

  const installed = isInstalled(app.id);

  const handleInstall = () => {
    if (installed) return;
    installApp(app);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div className="page-enter space-y-10">
      <section className="grid gap-8 rounded-2xl bg-base-100 p-6 shadow-md lg:grid-cols-2">
        <figure className="flex min-h-64 items-center justify-center overflow-hidden rounded-2xl bg-base-300 p-4 md:min-h-80">
          <img
            src={app.image}
            alt={app.title}
            className="max-h-80 w-full object-contain"
          />
        </figure>

        <div className="flex flex-col justify-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">{app.title}</h1>
            <p>Developer by: <span className="text-sm font-medium 
            text-primary">{app.companyName}</span></p>
          </div>
          <div className='border-1 border-dashed w-md'></div>
          <div className="grid grid-cols-3 gap-2 text-sm sm:text-base">
            <p>
              <img src={download} alt="" />
              <span className="font-sans">Downloads</span>{' '}
              <p className='font-bold text-3xl'>{formatDownloads(app.downloads)}</p>
            </p>
            <p>
              <img src={star} alt="" />
              <span className="font-sans">Rating</span>
              <p className='font-bold text-3xl'>{app.ratingAvg}/5</p>
            </p>
            <p>
              <img src={reviwe} alt="" />
              <span className="font-normal">Reviews</span>{' '}
              <p className='font-bold text-3xl'>{formatReviews(app.reviews)}</p>
            </p>
          </div>
          <button
            type="button"
            className="btn btn-accent mt-2 w-fit"
            disabled={installed}
            onClick={handleInstall}
          >
            {installed ? (
              'Installed'
            ) : (
              <>
                Install
                <span className="ml-1 font-semibold">
                  ({app.size} MB)
                </span>
              </>
            )}
          </button>
        </div>
      </section>

      <section className="rounded-2xl bg-base-100 p-6 shadow-md">
        <h2 className="mb-4 text-xl font-bold">Review Distribution</h2>
        <ReviewChart ratings={app.ratings} />
      </section>

      <section className="rounded-2xl bg-base-100 p-6 shadow-md">
        <h2 className="mb-3 text-xl font-bold">Description</h2>
        <p className="leading-relaxed text-base-content/80">{app.description}</p>
        
      </section>
    </div>
  );
}
