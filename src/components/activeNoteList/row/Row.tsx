import React, { useState } from 'react'
import{useDispatch} from "react-redux"
import {edit} from "../../../store/slices/dataSlice"
import { Idata } from '../../../store/models'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {type} from "../../../store/typesOfIcons"
import './Row.scss'
import EditIcon from './editIcon/EditIcon'
import ArchiveIcon from './archivIcon/ArchivIcon'
import DeleteIcon from './deleteIcon/DeleteIcon'
import Modal from '../../modals/Modal'
import EditCreateForm from '../../modals/EditCreate'
interface RowProps {
  data: Idata
  }

const Row = ({data}: RowProps) => {
 
  const [isModalOpen, setModalOpen] = useState(false)
  const [activeRow, setActiveRow] = useState(data)
  const dispatch = useDispatch();

  const getCreateData = (inputData: number) => {
    return new Date(inputData).toDateString()
  }

  const getUpdateData = (inputData: number) => {
    return new Date(inputData).toLocaleDateString()
  }
    

  return (
    <div className="row">
      <div className="cell w-10">
        <div className="icon">
          <FontAwesomeIcon
            className="fontAwesome"
            color="white"
            icon={type[data.category].icon}
          />
        </div>
      </div>
      <div className="cell">{data.name}</div>
      <div className="cell">{getCreateData(data.created)}</div>
      <div className="cell">{data.category}</div>
      <div className="cell">{data.content}</div>
      <div className="cell">
        {!data.updated ? '' : getUpdateData(data.created) + ', ' + data.updated}
      </div>
      <div className="cell w-10">
        <EditIcon
          onClick={() => {
            setModalOpen(true)
            setActiveRow(data)
          }}
        />
        <ArchiveIcon id = {activeRow.id}/>
        <DeleteIcon id = {activeRow.id}/>
      </div>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <EditCreateForm
            activeRow={activeRow}
            name="Edit"
            onSubmit={(el: Idata) => {
              setModalOpen(false)
              dispatch(edit(el))
            }}
          />
        </Modal>
      )}
    </div>
  )
}
export default Row
