import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';

export default function MainLayout() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === 'loading';

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-8">
        {isNavigating ? (
          <LoadingSpinner label="Loading page..." />
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
}
