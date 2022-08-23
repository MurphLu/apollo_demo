import { useQuery, gql, useMutation } from "@apollo/client";

const TAGS = gql`
query Tags {
  tags {
    id
    name
  }
}
`

const CREATE_TAG = gql`
mutation CreateTag($tag: TagInput) {
  createTag(tag: $tag) {
    id
    name
  }
}
`

const DELETE_TAG = gql`
mutation DeleteTag($id: ID) {
  deleteTag(id: $id)
}
`

export const useTags = () => {
  const { loading, data, error } = useQuery(TAGS);
  return {
    loading,
    data,
    error
  };
}

export const useCreateTag = () => {
  const [submitTag, { data, loading, error }] = useMutation(CREATE_TAG, {
    refetchQueries: [
      {query: TAGS},
    ]
  });
  return [submitTag, { data, loading, error }];
}

export const useDeleteTag = () => {
  const [deleteTag, { data, loading, error }] = useMutation(DELETE_TAG, {
    refetchQueries: [
      {query: TAGS},
    ]
  });
  console.log(data)
  return [deleteTag, { data, loading, error }];
}

// export const useCreateTag = (tag) => {
//   const { loading, data, error } = useMutation(CREATE_TAG)
// }
