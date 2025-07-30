import CardletStack from "./CardletStack"
import classes from "./CardletStackContainer.module.css"
export default function CardletStackContainer(){
    return(
        <div className={classes.cardletStackContainer}>
            <CardletStack key="1"/>
            <CardletStack key="2" />
            <CardletStack key="3" />
        </div>
    )
}