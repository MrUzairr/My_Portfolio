import React,{useState} from "react";
import { useParams } from "react-router-dom";
import records from "../../records.json";
import Animation from "../../Components/Animation";
import './index.css'
export default function WebDetail() {
  const webId = useParams();
  let url;
  records.find((obj) => {
    if (webId.id == obj.id) {
      url = obj.url;
    }
  });
  console.log(webId.id);
  const handleImage = () => {
    window.location.href = url;
  };
  const handleImageLoading = () => {
    document.getElementById("image").classList.add("spin-animation");
  };
  React.useEffect(() => {
    const imageElement = document.getElementById("image");

    const removeAnimationClass = () => {
      imageElement.classList.remove("spin-animation");
      imageElement.removeEventListener("animationiteration", removeAnimationClass);
    };

    imageElement.addEventListener("animationiteration", removeAnimationClass);

    return () => {
      imageElement.removeEventListener("animationiteration", removeAnimationClass);
    };
  }, []);
  return (
    <div>
      <div className="web-detail-container">
        <div className="web-detail-content">
          <h2>Web Details</h2>
          <div>
            {records.map((element) => {
              if (webId.id == element.id) {
                return (
                  <div key={element.id}>
                    <div className="web-detail-img">
                      <div className="web-detail-image">
                        <Animation outmod = "over" speed = {2} value={150} />
                        <p className="web-data-title">{element.title}</p>
                        <img
                          style={{ cursor: "pointer" }}
                          src={element.image}
                          onClick={handleImage}
                          alt={element.title}
                          onLoad={handleImageLoading}
                          id="image"
                        />
                        <p style={{ margin: "10px auto" }}>
                          By{" "}
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#EE4E34",
                              fontWeight: "500",
                            }}
                            href="/"
                          >
                            M.Uzair
                          </a>{" "}
                          | Last Updated: August 10, 2023 | WebSite Link :{" "}
                          <a
                            style={{
                              textDecoration: "none",
                              color: "#0b81f6",
                              fontWeight: "500",
                            }}
                            href={element.url}
                          >
                            {element.title}
                          </a>
                        </p>
                        <h3 className="web-data-pro">Project Brief</h3>
                        <p className="web-data-desc">{element.description}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
