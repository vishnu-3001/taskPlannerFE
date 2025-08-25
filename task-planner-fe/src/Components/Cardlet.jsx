import classes from "./Cardlet.module.css";
import { statusEnum,priorityEnum } from "../Utils/enums";
import { Tooltip } from "react-tooltip";
export default function Cardlet({task , onClick}){
    return(
        <div className={classes.cardLetContainer} onClick={onClick}>
            <div className={classes.innerCard}>
                <div className={classes.TitleLine}>
                    <p className={classes.title}>{task.taskTitle}</p>
                </div>
                <div className={classes.datesContainer}>
                    <p>{task.taskStartDate}</p>
                    <p>{task.taskEndDate}</p>
                </div>
                <div className={classes.detailsContainer}>
                    <div className={classes.leftDetails}>
                        <div className={classes.epicDetails}>
                            <p 
                            id="priority"
                            data-tooltip-content={task?.taskPriority}
                            data-tooltip-place="top"
                            data-tooltip-variant="dark"
                            >{priorityEnum[task?.taskPriority]}</p>
                            <Tooltip anchorSelect="#priority"></Tooltip>
                            <a href={task.taskEpic}>{task.taskEpic}</a>
                        </div>
                    </div>
                    <div className={classes.rightDetails}>
                        <div className={classes.pointsAndPriority}>
                            <div className={classes.points}>
                                <p>{task.taskPoints}</p>
                            </div>
                            <div>
                                <p
                                id="status"
                                data-tooltip-content={task?.taskStatus}
                                data-tooltip-place="top"
                                data-tooltip-variant="dark"
                                >{statusEnum[task?.taskStatus]}</p>
                                <Tooltip anchorSelect="#status"></Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}