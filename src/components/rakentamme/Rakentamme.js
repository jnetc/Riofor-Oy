import React from 'react';
// Styles
import '../../sass/components/rakentamme.scss';

import Palvelu from './Palvelu';

const Rakentaminen = () => {
  const rakentamme = data.map(data => {
    return <Palvelu key={data.icon} data={data} />;
  });

  return (
    <section id="rakentamme">
      <article>
        <h2>Muuraus Palvelu</h2>
        <p>
          Riofor työs­ken­te­lee täl­lä­kin het­kellä eri­näis­ten pro­jek­tien
          kim­pussa. Alla näet lis­tan kai­kista työn alla ole­vista kohteista.
          Eri kokoiset ja eri väriset tiilet sekä laastit avaavat mahdollisuuden
          monimuotoisiin julkisivuihin ja eri ladontakuviot mahdollistavat
          näyttävätkin yksityiskohdat, joilla voidaan korostaa rakenteellista
          arkkitehtuuria tai tyylisuuntaa.
        </p>
      </article>
      {rakentamme}
    </section>
  );
};

export default Rakentaminen;

const data = [
  {
    icon: 'building',
    title: 'Julkisivumuuraus',
    context:
      'Tiili on maailman eniten käytetty julkisivujen materiaali. Tiilimuuraus on oikein toteutettuna näyttävä, kestävä ja lähes huoltovapaa ulkoseinärakenne. Muuratut julkisivut ovat kokonaiskustannuksellisesti koko rakennuksen elinkaaren aikana erittäin kilpailukykyisiä oikein tehtyinä.',
  },
  {
    icon: 'office',
    title: 'Väliseinämuuraukset',
    context:
      'Muuraamme harkkoväliseinät sekä perinteiset tiilliväliseinät. Väliseinien muuraus tiilestä on paitsi aikaa kestävä ratkaisu, se on myöskin ajan hammasta kestävä sisustuselementti, joka luo omaa henkeään kotiisi.',
  },
  {
    icon: 'house',
    title: 'Korjausmuuraus',
    context:
      'Olemme erikoistuneet tiilijulkisivujen korjauksiin vaihdamme rapautuneet ja rikkoutuneet tiilet julkisivuihin sekä korjaamme saumat ja roikkuvat ikkunan ylitykset. Rikkoutuneiden tiilien vaihtaminen kannattaa, koska seinä kestää taas aikaa ja näyttää paremmalta, eikä päästä kosteutta rakenteisiin.',
  },
];
