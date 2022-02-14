import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';

function DropboxPage({ data }) {
  const { nodeCustomPage } = data;
  const { title, body } = nodeCustomPage;
  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body.processed }} />
    </Layout>
  );
}

export const query = graphql`
    query DropbpxQuery {
        nodeCustomPage(title: {eq: "Dropbox homepage"}, internal: {}) {
            title
            body {
            processed
            }
            relationships {
            field_blocks {
                body {
                processed
                }
                field_h1
                title
                node_type {
                drupal_internal__target_id
                }
            }
            }
        }
    }
`;
export default DropboxPage;
