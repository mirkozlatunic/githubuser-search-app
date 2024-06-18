import searchIcon from "../assets/icon-search.svg";

function Search() {
  return (
    <div className="">
      <img src={searchIcon} alt="search" className="absolute py-6 pl-8" />
      <input
        type="text"
        placeholder="Search GitHub username..."
        className="py-6 pl-20 rounded-2xl w-full"
      ></input>
      <button className="cursor-pointer bg-light-blue text-light-white px-6 py-3 rounded-xl absolute">
        Search
      </button>
    </div>
  );
}

export default Search;
