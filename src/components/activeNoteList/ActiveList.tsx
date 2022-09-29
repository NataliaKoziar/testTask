import React, { useState } from 'react'
import './ActiveList.scss'
import { useSelector } from "react-redux"
import Row from './row/Row'
import { Idata } from '../../store/models'
import TableHead from './tableHead/TableHead'
import Modal from '../modals/Modal'
import EditCreateForm from '../modals/EditCreate'
import { useDispatch } from "react-redux"
import { create } from "../../store/slices/dataSlice"

const ActiveList = () => {

  const data = useSelector((state: any) => state.data.data);
  const [createForm, setCreateForm] = useState(false)
  const dispatch = useDispatch()


  return (
    <>
      <div className="activeList">
        <div className="table">
          <TableHead />
          <div className="tbody">
            {data.filter((el: Idata) => !el.isArchived).map((e: Idata) => (
              <Row data={e} key={e.id} />
            ))}
          </div>
        </div>
        <button onClick={() => setCreateForm(true)}>Create Note</button>
      </div>
      {createForm && (
        <Modal onClose={() => setCreateForm(false)}>
          <EditCreateForm
            name="Create"
            onSubmit={(el) => {
              setCreateForm(false)
              dispatch(create(el))
            }}
          />
        </Modal>
      )}
    </>
  )
}
export default ActiveList
