const hello = (city) => {
    console.log(city.name)
    console.log(city.country)
    console.log(city.img)
    console.log("-----------")
}

const cities = [
    {name: "Paris", country: "France", img: "paris.jpg"},
    {name: "London", country: "United Kingdom", img: "london.jpg"},
    {name: "Berlin", country: "Germany", img: "berlin.jpg"},
]

const info = cities.map( (city) => {
    return city.name
})

console.log(info)

info.forEach(element => {
    console.log(element)
});