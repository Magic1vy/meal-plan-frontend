import { AiFillEdit, AiFillDelete} from "react-icons/ai"

export const MyMeals = ({ text, updatingInInput, deleteMeal}) => {
    return(
        <div className="myMeals">
            <p>{text}</p>
            <AiFillEdit className="icon" onClick={updatingInInput}></AiFillEdit>
            <AiFillDelete className="icon"  onClick={deleteMeal}></AiFillDelete>
        </div>
    )
}