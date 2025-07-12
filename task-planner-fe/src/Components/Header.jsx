import classes from "./Header.module.css";
import icon from "../Utils/gamer.png";
import Button from "./Helper/Button";
export default function Header(){
    return(
        <div className={classes.headerContainer}>
            <div className={classes.leftContainer}>
                <p className={classes.projectTitle}>VIP-Development</p>
            </div>
            <div className={classes.rightContainer}>
                <div className={classes.userAvatar}>
                    <img src={icon} alt="avatar"></img>
                </div>
                <div>
                    <Button name="Share +"></Button>
                </div>
            </div>
        </div>
    )
}