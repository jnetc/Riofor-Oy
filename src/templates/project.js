import React from 'react';
// import { graphql } from 'gatsby';

const Project = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <header>
      <h1>Header </h1>
    </header>
  );
};

export default Project;

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;
