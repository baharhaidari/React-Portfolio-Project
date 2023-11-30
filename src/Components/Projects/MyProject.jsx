import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./MyProjects.css";

import Pagination from "./Pagination";
import ProjectSearchAndFilter from "./Search&Filter";
import ProjectsItems from "./ProjectsItems";

import image1 from "../../assets/Images/img-1.webp";
import image2 from "../../assets/Images/img-2.jfif";
import image3 from "../../assets/Images/img-3.jfif";
import image4 from "../../assets/Images/img-4.jpg";
import image5 from "../../assets/Images/work-1.jpg";

const MyProjects = () => {
  const { t } = useTranslation();
  const allCategory = t("PROJECTS.all");

  // state variables
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState(allCategory);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const itemsPerPage = 3;
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  // storing project details from JSON obj in a variable
  let data = t("PROJECTS.projectDetails", { returnObjects: true });

  useEffect(() => {
    // Filter items based on search term
    const filtered = data.filter((item) =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
    setCurrentPage(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, t]);

  // Handle page click in pagination
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Extract categories from data and create unique category list
  const categories = data.map((project) => project.category);
  const allCategories = [allCategory, ...new Set(categories)];

  // Filter items based on category selection
  const filterItems = (category) => {
    if (category === allCategory) {
      setFilteredItems(data);
    } else {
      const filtered = data.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
    setCurrentPage(0);
    setSearchTerm("");
    setActiveCategory(category);
    setIsMenuOpen(false);
  };

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Get image source based on project ID
  const getImageByProjectId = (projectId) => {
    switch (projectId) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      case 4:
        return image4;
      case 5:
        return image5;
      default:
        return "";
    }
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = filteredItems.slice(offset, offset + itemsPerPage);

  return (
    <section className="projects-section" id="projects">
      <h1>{t("PROJECTS.heading")}</h1>

      <div className="wrapper">
        <ProjectSearchAndFilter
          searchTerm={searchTerm}
          handleSearchInputChange={handleSearchInputChange}
          filteredItems={filteredItems}
          allCategories={allCategories}
          activeCategory={activeCategory}
          filterItems={filterItems}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          t={t}
        />

        <ProjectsItems
          paginatedItems={paginatedItems}
          getImageByProjectId={getImageByProjectId}
          t={t}
        />

        <Pagination
          pageCount={pageCount}
          handlePageClick={handlePageClick}
          t={t}
        />
      </div>
    </section>
  );
};

export default MyProjects;
