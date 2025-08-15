import classes from "./Cardlet.module.css";
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
                            {/* <img>{task.statusIcon}</img> */}
                            <p>{task.taskPriority}</p>
                            <a href={task.taskEpic}>{task.taskEpic}</a>
                        </div>
                    </div>
                    <div className={classes.rightDetails}>
                        <div className={classes.pointsAndPriority}>
                            <div className={classes.points}>
                                <p>{task.taskPoints}</p>
                            </div>
                            <div>
                                <p>{task.taskStatus}</p>
                                {/* <img alt="priority">{task.priorityIcon}</img> */}
                                {/* <img alt="userAvatar">{task.userAvatar}</img> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}