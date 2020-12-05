import { gql } from '@apollo/client';

const GET_ACHIEVEMENTS = gql`
query getAchievements{
    getAchievements{
        name
        desc
        cover_image
        enabled
      }
}
`;

export { GET_ACHIEVEMENTS }