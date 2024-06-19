import searchIcon from "../assets/icon-search.svg";

function Search() {
  return (
    <div className="relative flex w-full max-w-2/4">
      <img src={searchIcon} alt="search" className="absolute py-6 pl-8 z-10" />
      <input
        type="text"
        placeholder="Search GitHub username..."
        className="py-6 pl-20 rounded-2xl w-full drop-shadow-xl dark:bg-dark-darkblue dark:drop-shadow-none dark:text-dark-white outline-none"
      ></input>
      <button className="cursor-pointer bg-light-blue text-light-white px-6 py-3 rounded-xl absolute right-2 top-1/2 transform -translate-y-1/2">
        Search
      </button>
    </div>
  );
}

export default Search;
