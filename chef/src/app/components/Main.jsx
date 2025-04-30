"use client"
import React from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromMistral } from './ai'


const Main = () => {

    const [ingredients, setIngredients] = React.useState([])

    let newIngredient = ""

    function addIngredient(formData){
        newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => {
            if (prevIngredients.includes(newIngredient)) {
                return prevIngredients; // No changes if already exists
            }
            return [...prevIngredients, newIngredient]; // Add new one
        });
    }

    const ingredientListItems = ingredients.map((ingredient, index ) => {
        return (
            <ul className="list-disc">
                <li key={index} className="text-slate-500">{ingredient}</li>
            </ul>
        )
    })

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe(){
        const response = await getRecipeFromMistral(ingredients)
        setRecipe(response)
    }

  return (
    <div className=" h-full w-full relative">
        <form action={addIngredient} className="flex items-center justify-center gap-5 w-full">
            <input type="text" name="ingredient" placeholder="e.g mushroom"  className="w-80 rounded-lg text-black border-1 p-2 border-gray-200"/>
            <button className="hover:shadow-xl ease-in-out duration-400 cursor-pointer bg-black text-white py-2 px-4 rounded-lg">+ Add Ingredient</button>
        </form>
        { 
            ingredients.length > 0 &&

            <div className="justify-start flex-col text-black items-center px-20 gap-8 py-8">
                <h1 className="font-bold text-3xl pb-5 list-none">Ingredients on hand:</h1>
                <div>{ingredientListItems}</div>
            </div>
        }
        {
            ingredients.length >= 3 &&
            <div className="bg-gray-100 mx-10 rounded-2xl p-5 mt-24 ">
                <h3 className="text-black">Ready for a recipe?</h3>
                <div className="flex justify-between items-center">
                    <p className="text-slate-500">Generate a recipe from your list of ingredients</p>
                    <button onClick={getRecipe} className="hover:shadow-xl ease-in-out duration-400 cursor-pointer bg-orange-300 text-white px-3 py-2 rounded-lg shadow">Get a recipe</button>
                </div>
            </div>
        }
        { recipe && <ClaudeRecipe recipe={recipe}/>}
    </div>
  )
}

export default Main