// import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  // const [iconState, setIconState] = useState("inactive");

  // useEffect(() => {
  //   const navigationTags = document.querySelectorAll(".icon-container");

  //   navigationTags.forEach((tag) => {
  //     tag.addEventListener("mouseover", function () {
  //       setIconState("active");
  //       console.log("over");
  //     });

  //     tag.addEventListener("mouseout", function () {
  //       setIconState("inactive");
  //     });
  //   });

  //   return navigationTags.forEach((tag) => {
  //     tag.removeEventListener("mouseover", function () {
  //       setIconState("active");
  //       console.log("over");
  //     });

  //     tag.removeEventListener("mouseout", function () {
  //       setIconState("inactive");
  //     });
  //   });
  // }, []);

  return (
    <section className="nav-container">
      <ul className="nav-bar">
        <li className="menu-container">
          <a href="/" className="icon-container">
            {/* <img src={`/icon/home-${iconState}.svg`} alt="" />
            <span className={`nav-name ${iconState}`}>홈</span> */}
            <img src="/icon/home-inactive.svg" alt="" />
            <span className="nav-name">홈</span>
          </a>
        </li>

        <li className="menu-container">
          <a href="/" className="icon-container">
            <img src="/icon/propertyCare-inactive.svg" alt="" />
            <span className="nav-name">자산관리</span>
          </a>
        </li>

        <li className="menu-container">
          <a href="/" className="icon-container">
            <img src="/icon/product-active.svg" alt="" />
            <span className="nav-name active">상품</span>
          </a>
        </li>

        <li className="menu-container">
          <a href="/" className="icon-container">
            <img src="/icon/gift-inactive.svg" alt="" />
            <span className="nav-name">혜택</span>
          </a>
        </li>

        <li className="menu-container">
          <a href="/" className="icon-container">
            <img src="/icon/allMenu-inactive.svg" alt="" />
            <span className="nav-name">전체메뉴</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Header;
