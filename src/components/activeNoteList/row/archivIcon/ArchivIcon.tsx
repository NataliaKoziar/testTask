import React from "react";
import { useDispatch } from 'react-redux'
import { archive } from '../../../../store/slices/dataSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxArchive} from '@fortawesome/free-solid-svg-icons'
interface ArchiveIconProps{
  id:number | string
}
const ArchiveIcon = ({id}:ArchiveIconProps)=>{
  const dispatch = useDispatch();
    return(
        <div className="edit">
          <FontAwesomeIcon
            className="fontAwesome"
            color="grey"
            icon={faBoxArchive}
            onClick= {()=>
              dispatch(archive({id}))
            }
          />
        </div>
    )
}
export default ArchiveIcon;