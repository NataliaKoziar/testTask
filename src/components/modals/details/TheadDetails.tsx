import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'

const TheadDetails = ()=>{

return(
    <div className="thead">
    <div className="row">
        <div className="cell w-30">Name</div>
        <div className="cell w-30"> Created</div>
        <div className="cell w-30">Content</div>
        <div className="cell w-10">
            <FontAwesomeIcon
            className="fontAwesome"
            color="white"
            icon={faInbox}
             />
        </div>
    </div>
</div>
)

}
export default TheadDetails