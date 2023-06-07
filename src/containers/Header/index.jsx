import { useEffect, useState } from "react";
import Button from "../../components/Button";

import profileMobile from "../../assets/images/profile-mobile.png";
import profileTablet from "../../assets/images/profile-tablet.png";
import profileDesktop from "../../assets/images/profile-desktop.png";

import "./header.css";

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    const selectImg = () => {
      if(screenWidth > 1440){
        setImgUrl(profileDesktop)
      } else if (screenWidth > 768){
        setImgUrl(profileTablet)
      } else {
        setImgUrl(profileMobile)
      }
    };

    window.addEventListener("resize", handleResize);
    selectImg();

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [screenWidth]);
  
  return (
    <div className="app__header flex__center">
      <div className="app__header-img">
        <img src={imgUrl} alt="profile" />
      </div>
      <div className="app__header-greetings">
        <h1>
          Nice to meet you! I'm{" "}
          <u style={{ textDecorationColor: "var(--color-2)" }}>Lucas Leite</u>.
        </h1>

        <p className="paragraph">
          Based in Brazil, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <div className="app__header-button">
          <Button name="Contact me" />
        </div>
      </div>
    </div>
  );
}
