import classes from "./cardletStack.module.css";
import Cardlet from "./Cardlet";
// import tasks from "../Utils/tasks";
import { useNavigate } from "react-router-dom";
export default function CardletStack({tasks,status}){
  const navigate=useNavigate();
    function handleClick(){
      navigate("/card/1");
    }
    return (
      <div className={classes.cardletContainer}>
        <p className={classes.title}>{status}</p>
        {tasks.map((task, i) => (
          <Cardlet
            key={i}
            task={task}
            onClick={handleClick}
          />
        ))}
      </div>
    );
}