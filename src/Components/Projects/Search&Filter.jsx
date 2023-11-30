import "./Search&Filter.css";

export default function ProjectSearchAndFilter({
  searchTerm,
  handleSearchInputChange,
  allCategories,
  activeCategory,
  filterItems,
  toggleMenu,
  isMenuOpen,
  t,
}) {
  return (
    <div className="search-filter">
      <div className="project-filters">
        <div
          className={`filter-menu slide-out-menu ${isMenuOpen ? "open" : ""}`}
        >
          {isMenuOpen && (
            <span className="close-menu-button" onClick={toggleMenu}>
              <i className="bx bx-x"></i>
            </span>
          )}

          {allCategories.map((category) => (
            <span
              className={`work-item ${
                category === activeCategory ? "active" : ""
              }`}
              onClick={() => filterItems(category)}
              key={category}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="search-input">
        <div>
          <span className="filter-menu-toggle" onClick={toggleMenu}>
            <i className="bx bx-menu-alt-left filter-menu-icon">
              <span>{t("PROJECTS.filter-label")}</span>
            </i>
          </span>
        </div>

        <div className="search">
          <label htmlFor="searchInput" className="input-label">
            {t("PROJECTS.search-input-lable")}:
          </label>
          <input
            id="searchInput"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
    </div>
  );
}
