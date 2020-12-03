import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Фрагмент       ...GatsbyImageSharpFluid
// Значения       aspectRatioб base64 sizes src
// ДРУГИЕ ФРАГМЕНТЫ
// https://www.gatsbyjs.com/docs/gatsby-image/#common-fragments-with-gatsby-transformer-sharp

//                 ВНИМАНИЕ!!!
// Это значение по умолчанию без которых будет выдавать ошибку
// Остально добавляем по надобности опционально

const Mobile = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(name: { eq: "riofor" }) {
  //       childImageSharp {
  //         fixed(width: 755, height: 770) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `);
  // if (!data?.file?.childImageSharp?.fixed) {
  //   return <div>Picture not found</div>;
  // }
  // return (
  //   <Img
  //     fixed={data.file.childImageSharp.fixed}
  //     // style={{ position: 'absolute' }}
  //   />
  // );
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "riofor" }) {
        childImageSharp {
          fluid(
            sizes: "(max-width: 755px) 100vw, (max-width: 460px) 100vw, 460px"
          ) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);
  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      style={{ overflow: 'initial' }}
      imgStyle={{ position: 'initial' }}
      alt="Cat taking up an entire chair"
    />
  );
};

export default Mobile;
