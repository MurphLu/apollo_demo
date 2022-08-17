import { useQuery, gql } from "@apollo/client";

const HELLO = gql`
  query Hello {
    hello
  }
`

export const useHello = () => {
  const { loading, data, error } = useQuery(HELLO);
  return {
    loading,
    data,
    error
  };
}
