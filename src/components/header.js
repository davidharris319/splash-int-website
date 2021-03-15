import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import gsap from "gsap";
import { Splash } from "../assets/icons";

import { ReactComponent as Cross } from "../assets/cross.svg";

let tl = gsap.timeline();

const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });

    if (menuState.menuOpened === true) {
      gsap.to("nav", { css: { display: "block" } });
      gsap.to("nav", { css: { overflow: "hidden" } });

      tl.to(".App", {
        duration: 1,
        y: dimensions.width <= 654 ? "70vh" : dimensions.height / 2,
        ease: "expo.inOut",
      })
        .to(".hamburger-menu span", 0.6, {
          delay: -1,
          scaleX: 0,
        })
        // .to("#Path_1", {
        //   duration: 0.4,
        //   delay: -0.6,
        // })
        .to(".hamburger-menu-close", 0.6, {
          delay: -0.8,
          css: {
            display: "block",
          },
        });
    }
    if (menuState.menuOpened === false) {
      tl.to(".App", 1, {
        y: 0,
        ease: "expo.inOut",
      })
        .to(".hamburger-menu span", 0.6, {
          delay: -0.6,
          scaleX: 1,
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", 0, {
          delay: -0.2,
          css: {
            display: "none",
          },
        })
        .to("body", 0, {
          css: {
            overflow: "auto",
          },
        })
        .to("nav", 0, {
          delay: -0.2,
          css: { display: "none" },
        });
    }
  }, [menuState.menuOpened]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/" exact>
              <Splash />
            </NavLink>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-menu-close"
            >
              <Cross />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
