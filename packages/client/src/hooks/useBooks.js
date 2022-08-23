import { useQuery, gql } from "@apollo/client";

const BOOKS = gql`
query Books {
  books {
    id
    name
    subName
    description
    corver
    author {
      id
      name
    }
    tags {
      id
      name
    }
  }
}
`

export const useBooks = () => {
  const { loading, data, error } = useQuery(BOOKS);
  return {
    loading,
    data,
    error
  };
}
