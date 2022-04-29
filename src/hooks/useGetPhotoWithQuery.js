import { gql, useQuery } from '@apollo/client'

export const useGetPhotoWithQuery = (id) => {
  const getPhoto = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `

  const { loading, error, data } = useQuery(getPhoto, { variables: { id } })
  return { loading, error, data }
}
