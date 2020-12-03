import React from 'react';

import Building from '../icons/Building';
import House from '../icons/House';
import Office from '../icons/Office';

const Palvelu = ({ data }) => {
  return (
    <div className="rakentamme">
      <div className="icons">
        {data.icon === 'building' && <Building />}
        {data.icon === 'office' && <Office />}
        {data.icon === 'house' && <House />}
      </div>
      <h3>{data.title}</h3>
      <p>{data.context}</p>
    </div>
  );
};
export default Palvelu;
