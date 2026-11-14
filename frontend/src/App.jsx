import Navbar from './components/Navbar';
import NavLinks from './components/NavLinks';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
function App() {
  return (
    <>
      <Navbar />
      <NavLinks />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Card>
  <span className="text-sm font-semibold text-emerald-600">
    DEV-UPS ACADEMY
  </span>

  <h1 className="text-2xl font-bold text-slate-800 mt-3">
    Welcome to your Dashboard
  </h1>

  <p className="text-slate-500 mt-2">
    Access your learning materials, assignments and classes here.
  </p>

  <div className="mt-5">
    <Button>View Materials</Button>
  </div>
</Card>
      </main>
      <Footer />
    </>
  );
}

export default App;
