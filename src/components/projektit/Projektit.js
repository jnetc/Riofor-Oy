import React, { useState, useEffect, useRef } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
// Styles
import '../../sass/components/projektit.scss';
// Component
import Projekti from './Projekti';
// Utils
import { compare } from '../../utils/compare';

const Projektit = () => {
  const { allContentfulProjektitBlog, contentfulProjektit } = useStaticQuery(
    query
  );
  const data = allContentfulProjektitBlog.nodes;
  const [projects, setProjects] = useState([]);
  const [toggle, setToggle] = useState(false);
  const buttonEl = useRef();

  useEffect(() => {
    if (data.length > 0) {
      setProjects(data);
    } else {
      setProjects([]);
    }
  }, [data]);
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
      <h3 id="active">
        {contentfulProjektit.active} {inprocess.length}
      </h3>
      {empty ? inprocess : <span>{contentfulProjektit.empty}</span>}
      <h3 id="finished">
        {contentfulProjektit.finished} {done.length}
      </h3>
      {done.length > 0 ? done : <span>Oooops! no data from CMS</span>}
      <Link
        ref={buttonEl}
        to={toggle ? '#active' : '#finished'}
        className="btn fill"
        onClick={() => toggleHandler()}
        onKeyDown={() => toggleHandler()}
        type="button">
        {toggle ? contentfulProjektit.btnHide : contentfulProjektit.btnShow}
      </Link>
    </section>
  );
};

export default Projektit;

const query = graphql`
  query {
    allContentfulProjektitBlog {
      nodes {
        address
        area
        contractor
        date
        done
        location
        name
        num
        type
        info {
          childMarkdownRemark {
            html
          }
        }
        image {
          fluid(quality: 75) {
            srcWebp
            srcSetWebp
            src
            srcSet
          }
        }
      }
    }
    contentfulProjektit {
      finished
      empty
      active
      btnHide
      btnShow
    }
  }
`;
