import { gql } from '@apollo/client';

const GET_BLOGS_BY_SLUG = gql`
    query getPostBySlug($slug:String!){
        getPostBySlug(slug:$slug){
            title
            body
            cover_image
            created_at
            id
        }
    }
`;

export { GET_BLOGS_BY_SLUG }