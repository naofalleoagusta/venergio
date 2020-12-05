import {gql} from '@apollo/client';

const GET_TEAM = gql`
    query getTeams{
        getTeams{
            name
            position
            cover_image
            thumbnail
            linkedin
        }
    }
`;
export {GET_TEAM}