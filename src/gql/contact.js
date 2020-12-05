import { gql } from '@apollo/client';

const MUTATION_ADD_CONTACT = gql`
    mutation addContact($nama: String!,$email:String!,$desc:String,$subject:String){
        addContact(nama:$nama,email:$email,desc:$desc,subject:$subject){
          id
        }
    }
`;

export { MUTATION_ADD_CONTACT }