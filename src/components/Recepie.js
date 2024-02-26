import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { IoMdArrowRoundBack } from "react-icons/io";
import { motion } from 'framer-motion';

const Recepie = () => {

    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState({})


    useEffect(()=> {
        getrecepies();
       },[])
    
       const getrecepies = async() => {
        try {
            const res= await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${recipeId}`);
           const data= res.data;
        //    console.log();
            setRecipe(data.recipe);
            console.log(recipe);
        } catch (error) {
            console.log(error);
        }
       }
    


  return (
    
    <div className='singlerecipecontainer'>
        <div className='imagecontainer'>
            <Link to={'/foods'}><motion.button whileTap={{scale:0.9}} className='backbtn'><IoMdArrowRoundBack /></motion.button></Link>
            <img src={recipe.image_url} />
        </div>
        <div className='details'>
            <h2>{recipe.title}</h2>
            <p>Provided by: {recipe.publisher}</p>
            <h2>Ingredients</h2>
            <h5>{recipe.ingredients}</h5>
           
            {/* {
                recipe.ingredients.map((data)=> (
                 <>
                  <h5>{data}</h5>
                 </>
                ))

            } */}
        </div>
    </div>
  )
}

export default Recepie