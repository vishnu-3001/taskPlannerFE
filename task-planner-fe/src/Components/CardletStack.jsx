import classes from "./cardletStack.module.css";
import Cardlet from "./Cardlet";
import tasks from "../Utils/tasks";
import { useNavigate } from "react-router-dom";
export default function CardletStack(){
  const navigate=useNavigate();
    function handleClick(){
      navigate("/card/1");
    }
    return (
      <div className={classes.cardletContainer}>
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