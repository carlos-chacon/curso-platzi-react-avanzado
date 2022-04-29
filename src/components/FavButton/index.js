import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ liked, likes, onClick }) => {
  const IconFavorite = liked ? MdFavorite : MdFavoriteBorder
  return (
    <>
      <Button onClick={onClick}>
        <IconFavorite size='32px' /> {likes} likes!
      </Button>
    </>
  )
}
