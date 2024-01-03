import React from "react";
import { Link } from "react-router-dom";
import Animation from "../../Components/Animation";
export default function WebPage() {
  return (
    <div>
  
      <div className="web-container">
        <div className="web-content">
            <h2>my recent work</h2>
              <Animation outmod = "out" speed={5} value={100}/>
            <div className="tiers-work">
              <div className="web1" id="webID1">
                <div>
                <a href="https://github.com/MrUzairr/React.Js-Intern/tree/f8a3aa256ca416bd5a387238bd48e4bc615ad641/React-project" className="web-code">View Code</a>
                <a href={`/web-detail/${1}`} className="web-detail">View Details</a>
                </div>
              </div>
              <div className="web2" id="webID2">
                <div>
                <a href="https://github.com/MrUzairr/React.Js-Intern/tree/f8a3aa256ca416bd5a387238bd48e4bc615ad641/Mern%20blog%20app" className="web-code">View Code</a>
                <a href={`/web-detail/${2}`} className="web-detail">View Details</a>
                </div>
              </div>
              <div className="web3" id="webID3">
                <div>
                <a href="https://github.com/MrUzairr/React.Js-Intern/tree/f8a3aa256ca416bd5a387238bd48e4bc615ad641/Hotel%20Booking%20App" className="web-code">View Code</a>
                <a href={`/web-detail/${3}`} className="web-detail">View Details</a>
                </div>
              </div>
              <div className="web4" id="webID4">
                <div>
                <a href="https://github.com/MrUzairr/React.Js-Intern/tree/f8a3aa256ca416bd5a387238bd48e4bc615ad641/Javascript-Project" className="web-code">View Code</a>
                <a href={`/web-detail/${4}`} className="web-detail">View Details</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
