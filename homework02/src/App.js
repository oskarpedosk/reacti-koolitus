import './App.css'
import City from './City'

const cities = [
    {name: "Paris", country: "France", img: "paris.jpg"},
    {name: "London", country: "United Kingdom", img: "london.jpg"},
    {name: "Berlin", country: "Germany", img: "berlin.jpg"},
    {name: "Tallinn", country: "Estonia", img: "tallinn.jpg"},
]

function App() {
    const addCity = () => {
        console.log('clicked')
    }
    return (
        <div className="container">
            <h1>Cities</h1>
            {cities.map((city, index) => {
                return <City key={index} name={city.name} country={city.country} img={city.img}/>
            })}
            <div>
                <h2>Where do you want to go?</h2>
                <div>
                    <button type='button' onClick={addCity}>Add</button>
                </div>
            </div>
        </div>
    )
 }
 export default App