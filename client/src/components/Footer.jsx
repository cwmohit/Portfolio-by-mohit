import React from "react";
import "../styles.css";
const Footer = ({bg, bgColor}) => {

  return (
    <div className="App mt-5">
     
      <footer class={bgColor+" text-lg-start"} style={{background: bg}}>
        <div class={bgColor+ "text-center p-3"}>
          © 2021 Copyright:
          <a class={bgColor} href="https://github.com/cwmohit">
            Cwmohit
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
