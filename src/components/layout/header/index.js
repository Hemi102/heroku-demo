import React, {useState} from 'react';
import Logo from './Logo';
import {Hash, User, CalendarBlank, Anchor} from 'phosphor-react';

import {HeaderCard} from './HeaderCard';

const Header = ({children}) => {
  const rightMenu = React.Children.toArray(children).some(child => child.type === Header.RightMenu);
  return (
    <header className={`justify-content-${rightMenu ? 'between' : 'center'} align-items-center`}>{children}</header>
  );
};

Header.Logo = () => {
  return <Logo />;
};
const RightMenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdownHandler = () => {
    setShowDropdown(pre => !pre);
  };
  return (
    <>
      <div className="mt-1 d-flex right-menu justify-content-between">
        <HeaderCard icon={<Hash size={12} />} title="Accound Number" subTitle="12345" />
        <HeaderCard icon={<User size={12} />} title="Patient Name" subTitle="Wade Warren" />
        <HeaderCard icon={<CalendarBlank size={12} />} title="Date of Birth" subTitle="12345" />
        <HeaderCard icon={<Anchor size={12} />} title="Insurance" subTitle="Self-Pay" />
        <HeaderCard icon={<Hash size={12} />} title="Subscriber ID" subTitle="123456789" />
      </div>
      <div className="right-dropdown">
        <User size={30} onClick={toggleDropdownHandler} />
        <div className={showDropdown ? 'dropdown' : 'd-none'}>
          <HeaderCard icon={<Hash size={12} />} title="Accound Number" subTitle="12345" />
          <HeaderCard icon={<User size={12} />} title="Patient Name" subTitle="Wade Warren" />
          <HeaderCard icon={<CalendarBlank size={12} />} title="Date of Birth" subTitle="12345" />
          <HeaderCard icon={<Anchor size={12} />} title="Insurance" subTitle="Self-Pay" />
          <HeaderCard icon={<Hash size={12} />} title="Subscriber ID" subTitle="123456789" />
        </div>
      </div>
    </>
  );
};
Header.RightMenu = RightMenu;

export {Header};
