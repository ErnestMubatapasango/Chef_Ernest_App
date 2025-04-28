"use client"
import React from 'react'

const Main = () => {

    const [ingredients, setIngredients] = React.useState([])

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => {
            return [...prevIngredients, newIngredient]
        })
    }

    const ingredientListItems = ingredients.map(ingredient => {
        return (
            <ul className="list-disc">
                <li key={ingredient} className="text-slate-500">{ingredient}</li>
            </ul>
        )
    })

  return (
    <div className=" h-full w-full relative">
        <form action={addIngredient} className="flex items-center justify-center gap-5 w-full">
            <input type="text" name="ingredient" placeholder="e.g mushroom" className="w-80 rounded-lg text-black border-1 p-2 border-gray-200"/>
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
            ingredients.length > 3 &&
            <div className="bg-gray-100 mx-10 rounded-2xl p-5 mt-24 ">
                <h3 className="text-black">Ready for a recipe?</h3>
                <div className="flex justify-between items-center">
                    <p className="text-slate-500">Generate a recipe from your list of ingredients</p>
                    <button className="hover:shadow-xl ease-in-out duration-400 cursor-pointer bg-orange-300 text-white px-3 py-2 rounded-lg shadow">Get a recipe</button>
                </div>
            </div>
        }

    </div>
  )
}

export default Main