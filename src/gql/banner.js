import { gql } from '@apollo/client';

const GET_BANNERS = gql`
query getBanners{
    getBanners{
        id
        title
        rank
        cover_image
        publish
    }
}
`;

export { GET_BANNERS }