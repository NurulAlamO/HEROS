import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import useInstall from '../hooks/useInstall';
import { formatDownloads } from '../utils/formatterss';
import {  useState } from 'react';
import { useMemo } from 'react';
import download from '../assets/fi_18110198.png';

const SORT_OPTIONS = {
  default: 'default',
  highLow: 'high-low',
  lowHigh: 'low-high',
};

export default function MyInstallation() {
  const { installed, uninstallApp } = useInstall();

  const handleUninstall = (app) => {
    uninstallApp(app.id);
    toast.success(`${app.title} has been uninstalled.`);
  };
  const [sort, setSort] = useState(SORT_OPTIONS.default);
  
  const filteredApps = useMemo(() => {
    let list = [...installed];
    // console.log(list)

    if (sort === SORT_OPTIONS.highLow) {
      list.sort((a, b) => b.downloads - a.downloads);
    } else if (sort === SORT_OPTIONS.lowHigh) {
      list.sort((a, b) => a.downloads - b.downloads);
    }

    return list;
  }, [installed, sort]);

  if (installed.length === 0) {
    return (
      <div className="page-enter rounded-2xl bg-base-100 py-20 text-center shadow-md">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="mt-4 text-base-content/70">
          You have not installed any apps yet.
        </p>
        <Link to="/apps" className="btn btn-primary mt-6">
          Install Apps
        </Link>
      </div>
    );
  }


  return (
    <div className="page-enter space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Your Installed Apps</h1>
        <p className="mt-3 text-base-content/70">
          Explore All Trending Apps on the Market developed by us
        </p>
      </section>
      <div className='flex justify-between'>
        <p className="text-sm font-semibold md:text-base sm:text-sm">
          <span>{installed.length}</span> Apps Found
        </p>
         <select
            className="select select-bordered select-sm w-full max-w-[124px]"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort by downloads"
          >
            <option value={SORT_OPTIONS.default}>Sort by Downloads</option>
            <option value={SORT_OPTIONS.highLow}>High-Low</option>
            <option value={SORT_OPTIONS.lowHigh}>Low-High</option>
          </select>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {filteredApps.map((app) => (
          <article
            key={app.id}
            className="card bg-base-100 shadow-md transition hover:shadow-lg"
          >
            <div className='flex items-center justify-between p-4 overflow-x-auto'>
              <div className='flex'>
                <figure className="flex aspect-square items-center justify-center overflow-hidden bg-base-300 p-3">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-[90px] w-[90px] object-contain"
                  />
                </figure>
                <div className="card-body p-2 sm:p-4 gap-3">
                  <div className='flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2'>
                    <h2 className="card-title text-lg">{app.title}:</h2>
                    <p className="text-sm text-base-content/60">{app.companyName}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-6 items-center text-sm">
                    <a className='flex items-center gap-2'>
                      <img className='w-[12px] h-[12px]' src={download} alt="" />
                      <span className='text-green-500'>{formatDownloads(app.downloads)}</span>
                    </a>
                    <StarRating rating={app.ratingAvg} />
                    <p>{formatDownloads(app.size)} <span>MB</span></p>
                  </div>
                </div>
              </div>
              <div>
                <div className="card-actions w-full lg:w-auto">
                  <button
                    type="button"
                    className="btn btn-accent btn-sm w-full sm:w-auto"
                    onClick={() => handleUninstall(app)}
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
