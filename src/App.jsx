import { Banner } from "./components/Banner/Banner";
import { Header } from "./components/Header/Header";
import { OurRecipe } from "./components/OurRecipe/OurRecipe";
import { Recipes } from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Our Recipe */}
      <OurRecipe />

      {/* Recipe Card Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Card Section */}
        <Recipes />
        {/* Side Bar */}
        <Sidebar />
      </section>
    </div>
  );
}

export default App;
