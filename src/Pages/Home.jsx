import { Link } from 'react-router-dom';
import AppCard from '../components/AppCard';
import HeroShowcase from '../components/HeroShowcase';
import { getTopApps } from '../data/appsDatas';

export default function Home() {
  const topApps = getTopApps(8);

  return (
    <div className="page-enter space-y-14">
      <HeroShowcase />

      <section>
        <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-col sm:items-center">
          <h2 className="text-2xl font-bold md:text-3xl">Trending Apps</h2>
          <h2 className='text-sm font-sans md:text-sm'>Explore All Trending Apps on the Market developed by us</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/apps" className="btn btn-primary btn-wide md:btn-lg">
            Show All
          </Link>
        </div>
      </section>
    </div>
  );
}
