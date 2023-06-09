import React from 'react';

import {DASHBOARD_PATH, QUESTIONS_PATH, Leadcaremanager_PATH, OutreachLeaders_PATH, OutreachStaff_PATH, Members_PATH} from 'constants/routePaths';
import {List, House, Question, UserGear, User} from 'phosphor-react';
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
        <NavLink to={Leadcaremanager_PATH}>
          <p className="menu-linkk">
            <UserGear size={24} /> <span className="heading-smb">Lead Care Managers</span>
          </p>
        </NavLink>
        <NavLink to={OutreachLeaders_PATH}>
          <p className="menu-linkk">
            <UserGear size={24} /> <span className="heading-smb">Outraech Leaders</span>
          </p>
        </NavLink>
        <NavLink to={OutreachStaff_PATH}>
          <p className="menu-linkk">
            <UserGear size={24} /> <span className="heading-smb">Outraech Staff</span>
          </p>
        </NavLink>
        <NavLink to={Members_PATH}>
          <p className="menu-linkk">
            <User size={24} /> <span className="heading-smb">Members</span>
          </p>
        </NavLink>
      </Accordion>
    </div>
  );
};

export default Sidebar;
