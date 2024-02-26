import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className='homeimgcontainer'>
        <Link to='/foods' >
            <motion.button whileTap={{scale:0.9}}>Search Recipes</motion.button>
        </Link>
    </div>
  )
}

export default Home



