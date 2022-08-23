import { useQuery, gql, useMutation } from "@apollo/client";

const AUTHORS = gql`
query Authors {
  authors {
    id
    name
  }
}
`

const DELETE_AUTHOR = gql`
mutation DeleteAuthor($id: ID) {
  deleteAuthor(id: $id)
}
`

const CREATE_AUTHOR = gql`
mutation CreateAuthor($author: AuthorInput) {
  createAuthor(author: $author) {
    id
    name
  }
}
`

export const useAuthors = () => {
  const { loading, data, error } = useQuery(AUTHORS);
  return {
    loading,
    data,
    error
  };
}

export const useDeleteAuthor = () => {
  const [deleteAuthor, {loading, data, error}] = useMutation(
    DELETE_AUTHOR,
    {
      refetchQueries: [{query: AUTHORS},]
    }
  );
  return [deleteAuthor, {
    loading,
    data,
    error
  }];
}

export const useCreateAuthor = () => {
  const [createAuthor, {loading, data, error}] = useMutation(
    CREATE_AUTHOR,
    {
      refetchQueries: [{query: AUTHORS},]
    }
  );
  return [createAuthor, {
    loading,
    data,
    error
  }];
}
