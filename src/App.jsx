import { Navbar, Welcome, Footer } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Footer />
  </div>
);

export default App;
