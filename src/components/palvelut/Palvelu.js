import React from 'react';
// Import Icons
import Building from '../icons/Building';
import House from '../icons/House';
import Office from '../icons/Office';

const Palvelu = ({ data }) => {
  return (
    <div className="palvelut">
      <div className="icons">
        {data.icon === 'building' && <Building />}
        {data.icon === 'office' && <Office />}
        {data.icon === 'house' && <House />}
      </div>
      <h3>{data.title}</h3>
      <div
        className="rich-txt"
        dangerouslySetInnerHTML={{
          __html: data.content.childMarkdownRemark.html,
        }}
      />
    </div>
  );
};
export default Palvelu;
