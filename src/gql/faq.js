import { gql } from '@apollo/client';

const GET_FAQS = gql`
query getFaqs{
    getFaqs{
        question
        answer
        enabled
    }
}
`;

export { GET_FAQS }