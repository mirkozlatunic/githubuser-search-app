import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen dark:bg-dark-dark dark:text-dark-white w-screen bg-light-lightblue">
      <div className="w-2/4">
        <Header />
        <Search />
      </div>
    </div>
  );
}

export default App;
