import React, { useState } from "react";
import PropTypes from 'prop-types';

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// Redux Store
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions";
// reactstrap
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";

// Import menuDropdown
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";

import logo from "../../assets/images/cola.jpg";
import logoLight from "../../assets/images/cola.jpg";
import logoLightSvg from "../../assets/images/cola.jpg";
import logoDark from "../../assets/images/cola.jpg";

//i18n
import { withTranslation } from "react-i18next";

const Header = props => {

  return (
    <React.Fragment>
      <div id="page-topbar">
        <div className="navbar-header">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="44" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="54" />
                </span>
              </Link>
            </div>
              <ProfileMenu  />
          </div>
      </div>
    </React.Fragment>
  );
};

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
};

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout;
  return { layoutType, showRightSidebar, leftMenu };
};

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})(withTranslation()(Header));
