/**
 * Navbar
 */

import React from "react";
import styled from "styled-components";
import useWindowScrollPosition, {
  WindowScrollPosition,
} from "@rehooks/window-scroll-position";

import { NavbarProps } from "./interface";
import netflixLogoImg from "resources/img/netflix-logo.png";
import netflixAvatarImg from "resources/img/netflix-avatar.png";
// import { NavbarContainer } from "./styled";

const NavbarContainer = styled.div<{ position: { y: number } }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.5s ease-in-out;
  z-index: 999;
  background-color: ${(p) => (p.position && p.position.y > 100 ? "black" : "")};

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  padding: 0 60px;
`;

const NetflixLogo = styled.img.attrs({
  src: netflixLogoImg,
})`
  height: 30px;
  width: 100px;
  margin-left: -4px;
`;

const NetflixAvatar = styled.img.attrs({
  src: netflixAvatarImg,
})`
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

const Navbar: React.FC<NavbarProps> = () => {
  let options = {
    throttle: 100,
  };
  let position: WindowScrollPosition = useWindowScrollPosition(options);

  return (
    <NavbarContainer position={position}>
      <NetflixLogo />
      <div>
        <NetflixAvatar />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
