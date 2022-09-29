import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxArchive, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "./TableHead.scss"
const TableHead = ()=>{
    return(
        <div className="thead">
          <div className="row">
            <div className="cell w-10"></div>
            <div className="cell"> Name</div>
            <div className="cell">Created</div>
            <div className="cell">Category</div>
            <div className="cell">Content</div>
            <div className="cell">Dates</div>
            <div className="cell w-10">
              <FontAwesomeIcon
                className="fontAwesome"
                color="white"
                icon={faBoxArchive}
              />
              <FontAwesomeIcon
                className="fontAwesome"
                color="white"
                icon={faTrashAlt}
              />
            </div>
          </div>
        </div>
    )
}
export default TableHead;