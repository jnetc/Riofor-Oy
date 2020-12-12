import React from 'react';
// Styles
import '../../sass/components/modals.scss';
import '../../sass/components/modal-project.scss';
// Component
import Image from './Image';
// Icons
import Cloud from '../icons/Cloud';
import Geo from '../icons/Geo';
// Context
import { useStore } from '../../store/store';

const Modal = () => {
  const { modal, modalHandler } = useStore();

  // console.log(modal);

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
        <Image image={modal.data?.image} alt={modal.data?.name} />
        <a
          href={modal.data?.location}
          className="btn fill link-icon"
          target="_blank"
          rel="noreferrer">
          Kuvat pilvissa
          <Cloud />
        </a>
        <a
          href={modal.data?.location}
          className="btn fill link-icon shrink-icon"
          target="_blank"
          rel="noreferrer">
          Osoite kartalla
          <Geo />
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
            <div
              id="modal-block_desc"
              className="rich-txt"
              dangerouslySetInnerHTML={{
                __html: modal?.data?.info?.childMarkdownRemark?.html,
              }}
            />
          </div>
        </article>
      </section>
    </template>
  );
};

export default Modal;
