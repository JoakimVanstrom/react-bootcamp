import './styles/Fruits.css'
import fruits from '../assets/Fruits.json'

function getFruits(){
    const fruit = [...fruits]
    return (
        <div className="fruktiga">
            <ul className='FruitUl'>
                {fruit.map(f => (
                    <li key={f.id} className="FruitLi"style={{backgroundImage: `url(${f.img})`}}>
                        <h3 className='FruitTitle'>{f.name}</h3>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default getFruits
        