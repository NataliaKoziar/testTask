import React  from 'react'
import { Idata } from '../../store/models'
import TableHead from './tableHead/TableHead'
import ArchiveRow from './archiveRow/ArchiveRow'
import {useSelector} from "react-redux"
import "./ArchiveList.scss"
// interface ArchiveListProps{
//   data:Idata[]
// }
const ArchiveList = () => {

  const data = useSelector((state:any)=> state.data.data );
   
  const categories: string[] = ['Task', 'Random Thought', 'Idea', 'Quote']


  return (
    <div className="archiveList">
    <div className="table">
      <TableHead />
      <div className="tbody">
        {categories.map(
          (e, i) =>
            data
              .filter((el:Idata) => el.category === e)
              .some((element:Idata) => element.isArchived) && (
              <ArchiveRow
                task={e}
                key={i}
                tasks={data.filter((el:Idata) => el.category === e)}
              />
            ),
        )}
      </div>
    </div>
    </div>
  )
}
export default ArchiveList
