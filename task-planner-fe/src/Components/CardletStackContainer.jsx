import CardletStack from "./CardletStack"
import classes from "./CardletStackContainer.module.css"
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchCardlets } from "./cardletSlice";
export default function CardletStackContainer(){
    const dispatch=useDispatch();
    const {cardlets,status,error}=useSelector((s)=>s.cardlets);
    useEffect(()=>{
        if(status==="idle"){
            dispatch(fetchCardlets());
        }
    });
    if(status==="loading"){
        return <p>Loading....</p>
    }
    if(status==="failed"){
        return <p>Error: {error}</p>
    }
    if(status==="success"){
        // console.log(cardlets);
    }
    return(
        <div className={classes.cardletStackContainer}>
            {
                Object.keys(cardlets).map((key)=>{
                    return (
                        <CardletStack 
                            key={key}
                            status={key} 
                            tasks={cardlets[key]} 
                        />
                    )
                })
            }
        </div>
    )
}