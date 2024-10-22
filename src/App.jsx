import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { OurRecipe } from "./components/OurRecipe/OurRecipe";

function App() {
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Our Recipe */}
      <OurRecipe />
    </div>
  );
}

export default App;
