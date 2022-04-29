import { gql, useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const useMutationToggleLike = () => {
  const [mutation, { loading, error }] = useMutation(LIKE_PHOTO)
  return { mutation, loading, error }
}
