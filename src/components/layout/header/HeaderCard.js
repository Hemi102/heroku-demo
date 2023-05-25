import React from 'react';

export const HeaderCard = ({icon, title, subTitle}) => {
  return (
    <div className="d-flex align-items-center header-card">
      <div className="icon">{icon}</div>
      <div className="d-flex flex-column justify-content-between ms-3">
        <span className="heading-xs title">{title}</span>
        <span className="heading-smb sub-title">{subTitle}</span>
      </div>
    </div>
  );
};
