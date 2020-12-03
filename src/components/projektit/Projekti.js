import React from 'react';

import { useStore } from '../../store/store';

import Done from '../icons/Done';

const Projekti = ({ data }) => {
  const { modalHandler } = useStore();

  return (
    <article
      className={data.done ? 'project available-info' : 'project disable-info'}
      onClick={() => modalHandler({ active: true, data })}
      onKeyPress={() => modalHandler({ active: true, data })}
      role="presentation">
      <span className={data.done ? 'status ' : 'status active'}>
        {data.done && <Done />}
      </span>
      <div className="el contractor-label">Urakoitsija</div>
      <div className="el contractor">{data.contractor}</div>
      <div className="el date-label">
        {data.done ? 'Valmistumisvuosi' : 'Valmistumisvuosi'}
      </div>
      <time className="el date">{data.date}</time>
      <div className="el name-label">Projektin nimi</div>
      <div className="el name">{data.name}</div>
      <div className="el address-label">Osoite</div>
      <address className="el address">{data.address}</address>
      {data.done ? (
        <span className="expand-icon dark" />
      ) : (
        <span className="expand-icon dark" />
      )}
    </article>
  );
};

export default Projekti;
