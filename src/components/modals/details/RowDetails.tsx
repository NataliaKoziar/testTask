import React from "react";
import {useDispatch} from "react-redux"
import { unArchive } from "../../../store/slices/dataSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { Idata } from "../../../store/models";
interface RowDetailsProps{
    item:Idata
}
 const RowDetails = ({item}:RowDetailsProps)=>{
const dispatch = useDispatch();

    const getCreateData = (inputData: number) => {
        return new Date(inputData).toDateString()
      }

    return(
        <div className="row">
            <div className="cell w-30">{item.name}</div>
            <div className="cell w-30">{getCreateData(item.created)}</div>
            <div className="cell w-30">{item.content}</div>
            <div className="cell w-10">
                <FontAwesomeIcon
                 className="fontAwesome"
                 color="grey"
                 icon={faInbox}
                 onClick = {()=>dispatch(unArchive(item.id))}
               />
            </div>

        </div>
    )
 }

 export default RowDetails