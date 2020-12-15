import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// Styles
import '../../sass/components/tocall.scss';
// Icon
import Phone from '../icons/Phone';

const ToCall = () => {
  const { contentfulYhteystiedot } = useStaticQuery(query);
  const phone = contentfulYhteystiedot.phone.substring(
    1,
    contentfulYhteystiedot.phone.lenght
  );
  console.log(phone);
  return (
    <a href={`tel: +358${phone}`} id="tocall">
      <Phone />
    </a>
  );
};

export default ToCall;

const query = graphql`
  query {
    contentfulYhteystiedot {
      phone
    }
  }
`;
