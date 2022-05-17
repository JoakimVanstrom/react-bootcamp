import './styles/BettyWhiteComp.css';
import betty from '../assets/Betty_White.jpg';

function BettyWhiteComp(props){
    
    return (
        <div className="BettyWhite">
            <img src={betty} alt="" />
            <div className='Info-Wrapper'>
            <h2>{props.betty.name}</h2>
            <p>{props.betty.job}</p>
            <p>{props.betty.life}</p>
            <p>{props.betty.quote}</p>
            </div>
        </div>
    )
}

export default BettyWhiteComp;