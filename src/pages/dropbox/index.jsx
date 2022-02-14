import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero/Hero';

function DropboxPage(props) {
  console.log('props', props);
  const { data } = props;
  const { nodeCustomPage } = data;
  const { title, body, relationships } = nodeCustomPage;
  const { field_blocks } = relationships;
  const hero = field_blocks[0];
  return (
    <Layout dropbox>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body.processed }} />
      <Hero {...hero} />
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
