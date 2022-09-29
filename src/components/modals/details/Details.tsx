import React from "react";
import RowDetails from "./RowDetails";
import TheadDetails from "./TheadDetails";
import { Idata } from "../../../store/models";
interface DetailProps {
    tasks: Idata[]
}

const Details = ({ tasks }: DetailProps) => {


    return (
        <>
            <h2>Details</h2>
            <div className="table">
                <TheadDetails />
                <div className="tbody">
                    {tasks.filter(el => el.isArchived).map((item: Idata) => <RowDetails item={item} key={item.id} />)}
                </div>
            </div>
        </>
    )
}
export default Details