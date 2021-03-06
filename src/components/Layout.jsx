/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import './layout.css';

function Layout({ children, dropbox }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const styleConfigs = {
    dropbox: {
      margin: '0',
      maxWidth: 'unset',
      padding: '0',
    },
    default: {
      margin: '0 auto',
      maxWidth: 960,
      padding: '0 1.0875rem 1.45rem',
    },
  };
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div
        style={styleConfigs[dropbox || 'default']}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: '2rem',
          }}
        >
          ©
          {' '}
          {new Date().getFullYear()}
          , Built with
          {' '}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
