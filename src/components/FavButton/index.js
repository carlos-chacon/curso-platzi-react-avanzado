import React from 'react'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import PropTypes from 'prop-types'
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

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
