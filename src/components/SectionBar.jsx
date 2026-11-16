
function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search projects..."
      value={searchTerm}
      onChange={(event) => onSearch(event.target.value)}
      className="search-input"
    />
  )
}

export default SearchBar
