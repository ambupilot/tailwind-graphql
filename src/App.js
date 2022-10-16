import Example from "./components/Example";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Hero from "./components/Hero";

function App() {
  return (
        <div className="md:container md:mx-auto px-4">
          <Header />
          <Hero />
          <Feature />
          <Example />
        </div>
  );
}

export default App;
