import TextEditable from "../Helper/TextEditable";
import DatesEditable from "../Helper/DatesEditable";
import DescriptionEditable from "../Helper/DescriptionEditable";
import AddLabels from "./AddLabels";
import AddChecklists from "./AddChecklists";
import classes from "./cardExpanded.module.css"
import AddUrl from "./AddUrl";
import Comments from "./Comments";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    updateField,
    setAddEnabled,
  } from './cardSlice'
export default function CardExpanded(){
    const dispatch=useDispatch();
    const formData=useSelector((state)=>state.card.formData);
    const addEnabled=useSelector((state)=>state.card.addEnabled);
    const {id}=useParams();
    useEffect(()=>{
        console.log(id);
    },[id]);
    function onValueChange(e){
        dispatch(updateField({name:e.target.name,value:e.target.value}));
    }
    function handleAdditionSelection(type){
        dispatch(setAddEnabled(type));
    }
    return(
        <div className={classes.cardExpandedContainer}>
            <div className={classes.innerCardExpandedContainer}>
                <form>
                    <TextEditable value={formData.title} onValueChange={onValueChange} name="title"></TextEditable>
                    <div className={classes.datesContainer}>
                        <DatesEditable label="Start Date" value={formData.startDate} name="startDate" onValueChange={onValueChange}></DatesEditable>
                        <DatesEditable label="End Date" value={formData.endDate} name="endDate" onValueChange={onValueChange}></DatesEditable>
                    </div>
                    <div className={classes.descriptionContainer}>
                        <DescriptionEditable value={formData.description} name="description" onValueChange={onValueChange}></DescriptionEditable>
                    </div>
                    <div className={classes.addContainer}>
                        <button className={classes.addButton} onClick={()=>handleAdditionSelection("label")} type="button">Add Label</button>
                        <button className={classes.addButton} onClick={()=>handleAdditionSelection("check")} type="button">Add CheckLists</button>
                        <button className={classes.addButton} onClick={()=>handleAdditionSelection("url")} type="button">Add URL</button>
                        {addEnabled==="label" && <AddLabels></AddLabels>}
                        {addEnabled==="check" && <AddChecklists></AddChecklists>}
                        {addEnabled==="url" && <AddUrl></AddUrl>}
                    </div>
                </form>
            </div>
        </div>
    )
}