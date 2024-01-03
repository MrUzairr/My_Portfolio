import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import jspdf from 'jspdf'
import Animation from "../Animation";

const PDF_FILE_URL = 'https://uzair-portfolio-site.netlify.app/Resume.pdf';
export default function FrontPage() {

    const pdfGenerate = (url) => {
        fetch(url).then((response)=>response.blob()).then((blob)=>{
          const blobURL = window.URL.createObjectURL(new Blob([blob]))
          const fileName = url.split('/').pop();
          const aTag = document.createElement("a");
          aTag.href = url;
          aTag.setAttribute("download",fileName);
          document.body.appendChild(aTag);
          aTag.click();
          aTag.remove();
        })
    }
    const mailTo = () => {
      window.location.href = 'mailto:uzairakhtar100@gmail.com';
    }
  return (
    <div id="home">
      <hr />
      <div className="front-container">
        <div className="front-content">
        <div className="front-div1">
          <p>
            Hell<span style={{color:'#EE4E34',  fontSize: '40px', fontWeight: '700'}}>o</span>, I'm 
          </p>
          <span>Web and Desktop Application Developer</span>
        </div>
        <div className="front-div2">
          <p>
            I specialize in constructing web applications that are secure,
            robust, and capable of scaling to meet your needs. My expertise is
            rooted in extensive experience with the .NET Framework.
          </p>
        </div>
        <div className="front-div3">
            <div>
                <button onClick={mailTo}>Create Journey</button>
            </div>
            <div className="pdf">
                <button onClick={()=>{pdfGenerate(PDF_FILE_URL)}}>Download CV</button>
            </div>
        </div>
        <div className="front-div4">
        <div className="iconDiv1">
          <a href="https://www.linkedin.com/in/muhammad-uzair-772538250/" className="text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/MrUzairr" className="text-reset">
            <FontAwesomeIcon icon={faGithub} />

          </a>
          
        </div>
        </div>
        </div>
        <div className="front-img">
            <img src="pic5.png" alt="" />
        </div>
      </div>
    </div>
  );
}
