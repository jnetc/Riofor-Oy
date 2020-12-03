import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
// Styles
import '../../sass/components/projektit.scss';
// Component
import Projekti from './Projekti';
// Utils
import { compare } from '../../utils/compare';

const Projektit = () => {
  const [projects, setProjects] = useState([]);
  const [toggle, setToggle] = useState(false);
  const buttonEl = useRef();

  useEffect(() => {
    if (data) {
      setProjects(data);
    }
  }, [projects]);
  // Slice array to active & finished projects
  const active = projects.filter(el => !el.done && el);
  const finished = projects.filter(el => el.done && el);

  // Active project
  const inprocess = active
    .sort((a, b) => compare(a, b))
    .map((data, i) => {
      return !data.done && <Projekti key={i + 0.23} data={data} />;
    });

  // Finished project
  const done = finished
    // Sort first by months then years
    .sort((a, b) => compare(a, b))
    .map((data, i) => {
      // Cut 3 project from array
      if (!toggle && i <= 2) {
        return data.done && <Projekti key={i + 0.45} data={data} />;
      }
      // Show full array
      if (toggle) {
        return data.done && <Projekti key={i + 0.45} data={data} />;
      }
      return null;
    });
  // If active project is empty
  const empty = active.find(el => el !== false);

  const toggleHandler = () =>
    setToggle(buttonEl.current.classList.toggle('show'));

  return (
    <section id="projektit">
      <h3 id="active">Käynnissä olevat projektit {inprocess.length}</h3>
      {empty ? (
        inprocess
      ) : (
        <span>Tällä hetkellä ei ole aktiivisia projekteja</span>
      )}
      <h3 id="finished">Valmistuneet projektit {done.length}</h3>
      {done}
      <Link
        ref={buttonEl}
        to={toggle ? '#active' : '#finished'}
        className="btn fill"
        onClick={() => toggleHandler()}
        onKeyDown={() => toggleHandler()}
        type="button">
        {toggle ? 'Piilota' : 'Näytä kaikki'}
      </Link>
    </section>
  );
};

export default Projektit;

const data = [
  {
    done: false,
    date: '10/2020',
    contractor: 'YIT-yhtyma',
    name: 'Blominmäen jätevedenpuhdistamo',
    address: 'Hansakartano 4, 02780 Espoo',
    type: 'muu­raus, rappaus',
    area: '8200',
    descriprion:
      'Peruskorjattaviin opetustiloihin sijoittuvat Metropolian elokuva- ja tv-, esitys- ja teatteritekniikan, viestinnän ja XR-designin opetustilat sekä Helsinki XR Center. Opetustilat koostuvat muun muassa luentosaleista, studioista ja muista tiloista. Lisäksi rakennetaan kahvilatilat keittiöineen.',
    pic: '',
    num: '5173',
  },
  {
    done: false,
    date: '05/2021',
    contractor: 'SRV Yhtiot',
    name: 'Keskussairaalan H-rakennus',
    address: 'Vanha-nurmikkontie 8, Vantaa',
    type: 'muu­raus',
    area: '5000',
    descriprion:
      'Meluavimmat työvaiheet, kuten raskaiden betonirakenteiden purkutyöt pyritään ajoittamaan kunkin muutosalueen lähimpien toimijoiden aukioloaikojen ulkopuolelle. Rakennus- ja purkutyöt tulevat kuitenkin aiheuttamaan meluhaittaa kiinteistössä työskenteleville ja asioiville. Sisäiset ja ulkoiset liikennejärjestelyt ja työmaan aitaus vaikuttavat kiinteistön ja Hämeentien katualueen kulkureitteihin. Pyydämme kaikkia noudattamaan paikalla olevia opasteita.',
    pic: '',
    num: '4-15173',
  },
  {
    done: true,
    date: '04/2018',
    contractor: 'NCC Rakennus',
    name: 'Helsinki-Vantaan lentoaseman terminaalin laajennus',
    address: 'Hansakartano 4, 02780 Espoo',
    type: 'muu­raus',
    area: '1080',
    descriprion:
      'Työt on jo aloitettu tammikuussa 2020 talotekniikan irtikytkennöillä, josta edetään kevyisiin purkutöihin. Massiivipurku tapahtuu alustavasti maaliskuusta elokuuhun. Peruskorjaus toteutetaan osittain vaiheistettuna siten, että viimeiset tilat valmistuvat keväällä 2021.',
    pic: '',
    num: '48794',
  },
  {
    done: true,
    date: '11/2018',
    contractor: 'Scanska',
    name: 'Kauklahden elä ja asu -seniorikeskus',
    address: 'Kirsikkapolku 10, Helsinki',
    type: 'muu­raus',
    area: '480',
    descriprion: '',
    pic: '',
    num: '648712',
  },
  {
    done: true,
    date: '07/2018',
    contractor: 'Paroc',
    name: 'Henriksdalin jätevedenpuhdistamon kunnostus',
    address: 'Pihlajankatu 14, Espoo',
    type: 'muu­raus',
    area: '11010',
    descriprion: '',
    pic: '',
    num: '9-48712',
  },
  {
    done: true,
    date: '02/2016',
    contractor: 'Lemmikainen',
    name: 'Trigoni - Pasilan pilvenpiirtäjät',
    address: 'Hansakartano 4, Helsinki',
    type: 'muu­raus',
    area: '6400',
    descriprion: '',
    pic: '',
    num: '54687-4',
  },
  {
    done: true,
    date: '01/2019',
    contractor: 'NCC Rakennus',
    name: 'Ranta-Tampellan asuinalue',
    address: 'Vesilirtonkuja 31, Vanta',
    type: 'muu­raus',
    area: '980',
    descriprion: '',
    pic: '',
    num: '216547',
  },
];
