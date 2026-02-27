import './Main.css'
import {useState} from "react";

let ingredientsMap = null;

const ingredients = ["Chicken", "Oregano", "Tomatoes",];

function handleSubmit(event) {
    
    event.preventDefault(); //prevents page from refreshing
    const formData = new FormData(event.currentTarget); //creates a variable that stores the form data of the current interaction
    const newIngredient = formData.get("ingredient"); //use the name attribute from the target input as a key to retrieve value
    ingredients.push(newIngredient);
}

function updateIngredients()
{
    ingredientsMap = ingredients.map(ingredient => {
        [resultVariable, setResultVariable] = useState(ingredient);
        return <li key={ingredient}>{ingredient}</li>
    }
    )
}

export default function Main(){


    let resultVariable;
    let setResultVariable;

    console.log(resultVariable);
    console.log(setResultVariable);

    return(
        <main>
            <section>
                <form 
                    action="" 
                    className="form-ingredient-query"
                    onSubmit={handleSubmit}
                >
                    <input
                        aria-label="Add ingredient" 
                        type="text" 
                        placeholder="e.g. oregano"
                        name="ingredient"
                    />
                    <button 
                        onClick={
                            ()=>{updateIngredients();}
                        } 
                        type="submit">+ Add Ingredients
                    </button>
                </form>
                <div className="inner-list">
                    <h2>Ingredients on hand:</h2>
                    
                    <ul>
                        {ingredientsMap}
                    </ul>
                </div>
                <div className="generate-recipe-prompt">
                    <div className="generate-recipe-description">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        </main>
    );
}