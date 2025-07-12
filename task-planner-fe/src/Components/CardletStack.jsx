import classes from "./cardletStack.module.css";
import Cardlet from "./Cardlet";
import tasks from "../Utils/tasks"
export default function CardletStack(){
    return(
        <div className={classes.cardletContainer}>
            {
                tasks.map((task,index)=>{
                    return <Cardlet task={task} key={index}></Cardlet>
                })
            }
        </div>
    )
}