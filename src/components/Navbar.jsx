import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkR, NavLink } from "react-router-dom";
import LogoImg from "../utils/Images/Logo.png";
import {
  FavoriteBorder,
  MenuRounded,
  SearchRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Button from "./Button";

const Nav = styled.div`
background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;
const NavContainer = styled.div`
 width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavLogo = styled(LinkR)`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;
const Logo = styled.img`
height: 34px
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navlinks = styled(NavLink)`
 display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;
const ButtonContainer = styled.div`
width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 28px;
  align-items: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileIcons = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;


const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 80%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;



const Navbar = ({ setOpenAuth, openAuth, currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavContainer>
        <MobileIcon onClick={() => setIsOpen(!isOpen)} >
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>
        <NavLogo to="/">
          <Logo src={LogoImg} />
        </NavLogo>
        <MobileIcons>
          <Navlinks to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlinks>
          <Navlinks to="/favorite">
            <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlinks>
          <Navlinks to="/cart">
            <ShoppingCartOutlined sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlinks>
        </MobileIcons>
        <NavItems>
        <Navlinks to="/">Home </Navlinks>
          <Navlinks to="/dishes">Dishes </Navlinks>
          <Navlinks to="/orders">Orders</Navlinks>
          <Navlinks to="/contact">Contact</Navlinks>
         
        </NavItems>
        {isOpen && (
          <MobileMenu  isOpen={isOpen} >
             <Navlinks to="/"  onClick={() => setIsOpen(false)}
          >Home
           </Navlinks>
          <Navlinks to="/dishes"  onClick={() => setIsOpen(false)}>
          Dishes 
          </Navlinks>
          <Navlinks to="/orders"  onClick={() => setIsOpen(false)}>
          Orders
          </Navlinks>
          <Navlinks to="/contact"  onClick={() => setIsOpen(false)}>
          Contact
          </Navlinks>
          <div
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <Button
                  text="Sign Up"
                  outlined
                  small
                  onClick={() => setOpenAuth(true)}
                />
                <Button
                  text="Sign In"
                  small
                  onClick={() => setOpenAuth(true)}
                />
              </div>
          </MobileMenu>

        )}


        <ButtonContainer>
          <Navlinks to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlinks>
          <Navlinks to="/favorite">
            <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlinks>
          <Navlinks to="/cart">
            <ShoppingCartOutlined sx={{ color: "inherit", fontSize: "28px" }} />
          </Navlinks>
          <Button
            text="Sign In" small onClick={() => setOpenAuth(true)} />
        </ButtonContainer>
      </NavContainer>

    </Nav>
  );
};

export default Navbar;