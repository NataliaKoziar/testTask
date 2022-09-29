import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { remove } from '../../../../store/slices/dataSlice'
interface DeleteIconProps{
 id:number | string
}
const DeleteIcon = ({id}:DeleteIconProps) => {
  const dispatch = useDispatch()
  return (
    <div className="edit">
      <FontAwesomeIcon
        className="fontAwesome"
        color="grey"
        icon={faTrashAlt}
        onClick={() => dispatch(remove({id}))}
      />
    </div>
  )
}
export default DeleteIcon
