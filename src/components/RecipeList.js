import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const RecipeList = () => {

    const [value, setValue] = useState("");
    const[dish, setDish] = useState("pasta");
    const [receipes, setreceipes] = useState([])

   useEffect(()=> {
    getrecepies();
   },[dish])

   const getrecepies = async() => {
    try {
        const res= await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${dish}`);
        const data= res.data;
        setreceipes(data.recipes);
    } catch (error) {
        console.log(error);
    }
   }


   const searchdish = () => {
           setDish(value);
   }

  return (
    <div className='foodlistcontainer'>
        <h1>Select Recipe What You Want To Eat</h1>
        <div className='searchrecipeinput'>
        <input type='text' placeholder='enter dish' onChange={(e)=> setValue(e.target.value)} />
        <motion.button whileTap={{scale:0.9}} className='btn' onClick={searchdish}>Search</motion.button>
        </div>
        <h2>Recipe For: {dish}</h2>
        <div className='foodcontainer'>
            {receipes.map((dish)=>(
                <div className='receipescontaiiner'> 
                <img src={dish.image_url} alt="" />
                <h3>{dish.title}</h3>
                <h5>{dish.publisher}</h5>
                <div className="btn">
                    <Link to={`/recipes/${dish.recipe_id}`} >
                        <motion.button whileTap={{scale:0.9}} className='detailsbtn'>Details</motion.button>
                    </Link>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default RecipeList;