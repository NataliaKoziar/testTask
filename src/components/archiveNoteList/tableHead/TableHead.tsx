import React from 'react'
import "./TableHead.scss"
const TableHead = () => {
  return (
    <div className="thead">
      <div className="row">
        <div className="cell w-10"></div>
        <div className="cell"> Note Category</div>
        <div className="cell">Active</div>
        <div className="cell">Arhived</div>
        <div className="cell">Details</div>
      </div>
    </div>
  )
}
export default TableHead
