import React from 'react';

import {DASHBOARD_PATH, QUESTIONS_PATH} from 'constants/routePaths';
import {List, House, Question} from 'phosphor-react';
import {ReactComponent as MiniLogo} from 'assets/images/logo.svg';
import MenuHideIcon from 'assets/images/contract-left-line.png';
import './sidebar.scss';
import {Accordion} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="App sidebar-main">
      <div className="logo-menu-otr">
        <div className="logo-otr">
          <p>
            <MiniLogo />
          </p>
        </div>
        <div className="menu-icon-otr" onClick={() => {}}>
          <img src={MenuHideIcon} alt="icon" />
        </div>
      </div>
      <Accordion defaultActiveKey="4">
        <NavLink to={DASHBOARD_PATH}>
          <p className="menu-linkk">
            <House size={24} /> <span className="heading-smb">Dashboard</span>
          </p>
        </NavLink>
        <NavLink to={QUESTIONS_PATH}>
          <p className="menu-linkk">
            <Question size={24} /> <span className="heading-smb">Questions</span>
          </p>
        </NavLink>
      </Accordion>
    </div>
  );
};

export default Sidebar;
