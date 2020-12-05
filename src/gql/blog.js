import { gql } from '@apollo/client';

const GET_BLOGS = gql`
    query getPosts($page:Int,$limit:Int!){
        getPosts(limit:$limit,page:$page){
            length
            data{
              title
              slug
              body
              publish
              cover_image
              created_at
              id
            }
          }
    }
`;

const GET_TOP2_BLOGS = gql`
    query getTopTwoPosts{
        getTopTwoPosts{
            title
            slug
        }
    }
`;

export { GET_BLOGS,GET_TOP2_BLOGS }