import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2'
import background from '../images/hero-background.png'

import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
   <div>
    <Helmet>
    <title>Vyntrade  About</title>
    <meta name="description" content="VYNTRADE was founded in 2018 to offer consulting to Wine & Spirit Industry Companies.​" />
    <meta name="theme-color" content="black" />
  </Helmet>
<Layout>
  <div className="pad2" style={{backgroundImage: "url(" + background + ")"}}>
    <div className="page-container" >
              <h1>
                {title}
              </h1>
              <PageContent className= "page-container" content={content} />
              </div>
 </div>
  </Layout>
    </div>
          
    
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
   
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />

  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
