import axios from "axios";

const  myURL = 'https://meal-plan-z64r.onrender.com'

const getAllMeals = (setMeal) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
    setMeal(data)
    })
}

const addMeal = (title, setTitle, setMeal) => {
    axios.post(`${myURL}/saveMeal`, {title})
    .then((data) => {
        console.log(data);
        setTitle('');
        getAllMeals(setMeal)
    })
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing ) => {
    axios.post(`${myURL}/editMeal`, {_id: mealId, title})
    .then((data) => {
        console.log(data)
        setTitle('')
        setEditing(false)
        getAllMeals(setMeal)
    })
}

const deleteMeal = (_id, setMeal) => {
    axios.post(`${myURL}/deleteMeal`, { _id})
        .then((data) => {
            console.log(data)
            getAllMeals(setMeal)
        })
} 

export {getAllMeals, addMeal, editMeal, deleteMeal};