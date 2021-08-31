

import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories=['One Punch', 'Samurai', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);



    return (
        
        
        <>
        <h2>
            GifExpertApp
            <AddCategory setCategories={setCategories}/>
        </h2>
        <hr/>
        
        <ol>

            {categories.map(category=>(
            
            <GifGrid key= {category} category={category}/>))
            
            }

        </ol>

        </>
    )
    
}
