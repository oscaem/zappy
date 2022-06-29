import { Navbar, Main, Loader, Service, Coverage, Footer } from './components'

const App = () => (
  <div className="min-h-screen">
    <div className="bg-body">
      <Navbar />
      <Main />
    </div>
    <Service />
    <Coverage />
    <Footer />
  </div>
);

export default App;
