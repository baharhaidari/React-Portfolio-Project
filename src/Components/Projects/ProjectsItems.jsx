import StarRating from "./StarRating";
import "./ProjectsItems.css";

export default function ProjectsItems({
  paginatedItems,
  getImageByProjectId,
  t,
}) {
  return (
    <div className="work-container">
      {paginatedItems.map((item) => (
        <div className="work-box" key={item.id}>
          <img
            src={getImageByProjectId(item.id)}
            alt="work images"
            className="work-image"
          />
          <div className="projects-layer">
            <h4>{item.title}</h4>
            <p>{item.category}</p>

            <div className="link-star-wrapper">
              <div className="star-link">
                <StarRating projectId={item.id} />
              </div>

              <div className="links-container">
                <div>
                  <a
                    href={item.githubLink}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("PROJECTS.github-link-lable")}
                    <i className="bx bx-link-external projects-link"></i>
                  </a>
                </div>

                <div className="demo">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {t("PROJECTS.demo")}
                    <i className="bx bx-link-external projects-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
