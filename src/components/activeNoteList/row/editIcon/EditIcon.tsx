import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
const EditIcon = ({onClick}: any ) => {
  return (
    <div className="edit" onClick={()=>onClick()}>
      <FontAwesomeIcon
        className="fontAwesome"
        color="grey"
        icon={faPencilAlt}
      />
    </div>
  )
}
export default EditIcon
