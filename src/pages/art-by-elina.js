import React from 'react';
import { graphql } from 'gatsby';
import Project from '../templates/Project';
import Browser from '../components/Browser';
import Content from '../components/Content';
import useAnimateOnScroll from '../utils/useAnimateOnScroll';

import mastImage from '../images/projects/art-by-elina/mast.jpg';

function ArtByElinaPage({ data, path }) {
  useAnimateOnScroll();

  let about, gallery, home, menuOne;

  data.allFile.edges.forEach(image => {
    if (image.node.name === 'about') {
      about = image.node.childImageSharp.fluid;
    } else if (image.node.name === 'gallery') {
      gallery = image.node.childImageSharp.fluid;
    } else if (image.node.name === 'home') {
      home = image.node.childImageSharp.fluid;
    } else if (image.node.name === 'menu-1') {
      menuOne = image.node.childImageSharp.fluid;
    }
  });

  return (
    <Project
      title="Art by Elina"
      image={mastImage}
      pathname={path}
    >
      <Content header="Inspired paintings">
        <p>Elina Dmitruk is a fine artist using oil paints to create inspired paintings both realistic and imaginary. She needed a website to tell her story and showcase her work. I partnered with Mary Rauzi at <a href="https://embrcreative.com/" target="_blank" rel="noopener noreferrer">Embr Creative</a>, who redesigned the website, while I handled the redevelopment of a generic Squarespace page to a custom WordPress build.</p>
      </Content>

      <div className="section-padding bg-lightgrey">
        <div className="grid">
          <Browser image={menuOne} />
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="grid">
          <div className="project__double">
            <div>
              <Browser image={home} />
            </div>
            <div>
              <Browser image={about} />
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-lightgrey">
        <div className="grid">
          <Browser image={gallery} />
        </div>
      </div>
    </Project>
  );
}

export default ArtByElinaPage;

export const projectQuery = graphql`
  query ImageQuery {
    allFile(filter: {
        extension: { regex: "/(jpg)/" }
        relativeDirectory: {eq: "projects/art-by-elina"}
    }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
