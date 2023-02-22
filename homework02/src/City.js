import Counter from './Counter'

function City({name, country, img}) {
    return (
        <div className="city-row">
            <img className="city-row__img" src={require('./images/'+img)} alt={name} />
            <Counter/>
            <div>
                <p className="city-row__info">{name}, {country}</p>
            </div>
        </div>
    )
}

export default City