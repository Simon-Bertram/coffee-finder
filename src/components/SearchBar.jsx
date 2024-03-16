const SearchBar = () => {
  return (
    <div className="search-bar outline-1">
      <input
        className="search-input btn"
        placeholder="Find great coffee..."
        type="text"
      />
      <button className="btn outline ml-3">Search</button>
    </div>
  );
};

export default SearchBar;
