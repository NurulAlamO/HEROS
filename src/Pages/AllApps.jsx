import { useEffect, useMemo, useState } from 'react';
import AppCard from '../components/AppCard';
import LoadingSpinner from '../components/LoadingSpinner';
import appsData from '../data/appsDatas';
import appError from '../assets/App-Error.png'

const SORT_OPTIONS = {
  default: 'default',
  highLow: 'high-low',
  lowHigh: 'low-high',
};

export default function AllApps() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [sort, setSort] = useState(SORT_OPTIONS.default);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(timer);
  }, [search]);

  const isSearching = search !== debouncedSearch;

  const filteredApps = useMemo(() => {
    let list = [...appsData];

    if (debouncedSearch.trim()) {
      const query = debouncedSearch.trim().toLowerCase();
      list = list.filter((app) => app.title.toLowerCase().includes(query));
    }

    if (sort === SORT_OPTIONS.highLow) {
      list.sort((a, b) => b.downloads - a.downloads);
    } else if (sort === SORT_OPTIONS.lowHigh) {
      list.sort((a, b) => a.downloads - b.downloads);
    }

    return list;
  }, [debouncedSearch, sort]);

  return (
    <div className="page-enter space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Our All Applications</h1>
        <p className="mx-auto mt-3 max-w-2xl text-base-content/70">
         Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </section>

      <section className="flex flex-col gap-4 rounded-2xl bg-base-100 p-4 shadow-md md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-semibold md:text-base">
          (<span>{appsData.length}</span>)Apps Found
        </p>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
          <select
            className="select select-bordered select-sm w-full sm:w-44"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort by downloads"
          >
            <option value={SORT_OPTIONS.default}>Sort by Downloads</option>
            <option value={SORT_OPTIONS.highLow}>High-Low</option>
            <option value={SORT_OPTIONS.lowHigh}>Low-High</option>
          </select>

          <label className="input input-bordered flex w-full items-center gap-2 sm:w-72">
            <input
              type="search"
              className="grow"
              placeholder="Search apps by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>
      </section>

      {isSearching ? (
        <LoadingSpinner label="Searching apps..." />
      ) : filteredApps.length === 0 ? (
            <div className="
              rounded-2xl bg-base-100 py-20 text-center
              shadow-md">
              <div className='grid items-center justify-center'>
                <img src={appError} alt=""/>
              </div>
              <h2 className="text-2xl font-bold text-error">OPPS!! APP NO FOUND</h2>
              <p className="mt-2 text-base-content/70 mb-4">
                The App you are requesting is not found on our system.  please try another apps.
                <br />
                OR  <br />
                Try a different search term or clear the filter.
              </p>
            </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
