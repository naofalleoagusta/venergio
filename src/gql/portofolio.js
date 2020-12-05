import { gql } from '@apollo/client';

const GET_PORTOFOLIOS = gql`
query getPortofolios{
    getPortofolios{
        name
        desc
        cover_image
        enable
      }
}
`;

export { GET_PORTOFOLIOS }