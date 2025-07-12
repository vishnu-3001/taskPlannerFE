import classes from "./Cardlet.module.css";
export default function Cardlet({task}){
    return(
        <div className={classes.cardLetContainer}>
            <div className={classes.innerCard}>
                <div className={classes.TitleLine}>
                    <p className={classes.title}>{task.title}</p>
                </div>
                <div className={classes.datesContainer}>
                    <p>{task.startDate}</p>
                    <p>{task.endDate}</p>
                </div>
                <div className={classes.detailsContainer}>
                    <div className={classes.leftDetails}>
                        <div className={classes.epicDetails}>
                            {/* <img>{task.statusIcon}</img> */}
                            <p>{task.priorityIcon}</p>
                            <a href={task.epicLink}>epName</a>
                        </div>
                    </div>
                    <div className={classes.rightDetails}>
                        <div className={classes.pointsAndPriority}>
                            <div className={classes.points}>
                                <p>{task.points}</p>
                            </div>
                            <div>
                                <p>{task.statusIcon}</p>
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