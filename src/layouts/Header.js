import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/cross.svg";
import user from "../assets/images/users/schale.png";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <Navbar color="primary" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/starter" className="nav-link">
              †昇天†
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link">
              게시판
            </Link>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              로비
            </DropdownToggle>
            <DropdownMenu end>
              <Link to="/tmp" style={{ textDecoration: "none" }}>
                <DropdownItem>서클 멤버</DropdownItem>
              </Link>
              <Link to="/tmp" style={{ textDecoration: "none" }}>
                <DropdownItem>등록 학생</DropdownItem>
              </Link>
              <DropdownItem divider />
              <Link to="/tmp" style={{ textDecoration: "none" }}>
                <DropdownItem>외부 링크</DropdownItem>
              </Link>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              업무
            </DropdownToggle>
            <DropdownMenu end>
              <Link to="/tmp" style={{ textDecoration: "none" }}>
                <DropdownItem>총력전</DropdownItem>
              </Link>
              <DropdownItem divider />
              <Link to="/tmp" style={{ textDecoration: "none" }}>
                <DropdownItem>종합전술시험 </DropdownItem>
              </Link>
              <DropdownItem divider />
              <Link to="/tmp" style={{ textDecoration: "none" }}>
                <DropdownItem>전술 대회</DropdownItem>
              </Link>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="primary">
            <img
              src={user}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>선생이름</DropdownItem>
            <DropdownItem header>Lv.80</DropdownItem>
            <Link to="/join" style={{ textDecoration: "none" }}>
              <DropdownItem>내 학생</DropdownItem>
            </Link>
            <DropdownItem divider />
            <Link to="/login" style={{ textDecoration: "none" }}>
              <DropdownItem>계정 정보</DropdownItem>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <DropdownItem>로그인</DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
