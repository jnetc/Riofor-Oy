import React from 'react';

import '../../sass/components/modals.scss';
import '../../sass/components/modal-project.scss';
import { useStore } from '../../store/store';
const Youtube = () => {
  const { modal, modalHandler } = useStore();
  return (
    <template id="modal" className={modal.active ? 'show' : ''}>
      <span
        id="close"
        role="button"
        aria-label="close"
        tabIndex={0}
        onKeyDown={() => modalHandler({ active: false, data: null })}
        onClick={() => modalHandler({ active: false, data: null })}
      />
      <section id="modal-project">
        <div id="modal-pic">Pic</div>
        <a href="http://" className="btn fill">
          Kuvat pilvissa
        </a>
        <a href="http://" className="btn fill">
          Osoite kartalla
        </a>
        <article id="modal-data">
          <div className="modal-block left">
            <h3>Projektin tiedot</h3>
            <p className="strong">Projektin numero</p>
            <p>{modal.data?.num}</p>
            <p className="strong">Projektin nimi</p>
            <p>{modal.data?.name}</p>
            <p className="strong">Valmistumisvuosi</p>
            <p>{modal.data?.date}</p>
            <p className="strong">Urakoitsija</p>
            <p>{modal.data?.contractor}</p>
            <p className="strong">Osoite</p>
            <p>{modal.data?.address}</p>
            <p className="strong">Työn tyyppi</p>
            <p>{modal.data?.type}</p>
            <p className="strong">Pinta-ala</p>
            <p>
              {modal.data?.area} m<sup>2</sup>
            </p>
          </div>
          <div className="modal-block right">
            <h3>Lisää tiedot</h3>
            <p id="modal-block_desc">{modal.data?.descriprion}</p>
          </div>
        </article>
      </section>
    </template>
  );
};

export default Youtube;
