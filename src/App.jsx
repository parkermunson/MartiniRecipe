import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
const [ingredients, setIngredients] = useState([])


useEffect (() => {
  const fetchIngredients = async () => {
    const response = await axios.get('http://localhost:3000/api/ingredients')
    setIngredients(response.data.map(item => item.name))
    console.log(response.data.map(item => item.name))
  }
  fetchIngredients()
}, [])

  return (
    <div>
      <h1 className='recipe-title'>Dry Martini Recipe</h1>
      <div className='martini-image-container'>
      <img className='martini-image' src='https://images.squarespace-cdn.com/content/v1/59c3feb149fc2b152179e47e/1522878418284-MG4TCUI4TWFSA3L8UNHW/tm2.jpg?format=1000w' />
      </div>
      <div className='recipe-content-container'>
      <p>The perfect antidote to a long day of learning backend development.</p>
      <ul>
        {ingredients.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <ol>
        <li>Add the gin or vodka, vermouth and olive brine to a shaker filled with ice.</li>
        <li>Shake for 15–20 seconds until well chilled.</li>
        <li>Double strain through fine mesh strainer into a chilled cocktail glass.</li>
        <li>Garnish with a skewer of olives.</li>
        <li>Toast to Morgan and Divya for getting us through this.</li>
      </ol>
      </div>
      <br/>
      <p id="martini-glass"> 🍸 </p>
    </div>
  );
}

export default App
