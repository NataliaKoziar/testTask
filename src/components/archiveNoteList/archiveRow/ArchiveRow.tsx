import React, { useState } from 'react'
import { Idata } from '../../../store/models'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type } from "../../../store/typesOfIcons"
import Modal from "../../modals/Modal"
import Details from "../../modals/details/Details"


interface ArchiveRowProps {
  task: string
  tasks: Idata[]
}

const ArchiveRow = ({ task, tasks }: ArchiveRowProps) => {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="row">
        <div className="cell w-10">
          <div className="icon">
            <FontAwesomeIcon
              className="fontAwesome"
              color="white"
              icon={type[task].icon}
            />
          </div>
        </div>
        <div className="cell">{task}</div>
        <div className="cell">
          {tasks.filter((el) => !el.isArchived).length}
        </div>
        <div className="cell"> {tasks.filter((el) => el.isArchived).length}</div>
        <div className="cell">
          <button onClick={() => setShowDetails(true)}>See more</button>
        </div>
      </div>
      {showDetails && <Modal onClose={() => setShowDetails(false)}>
        <Details tasks={tasks} />
      </Modal>}
    </>
  )
}
export default ArchiveRow
