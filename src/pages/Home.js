import Header from "../components/Header";
import Smile from "../assets/Smile.png";

function Home(){
    return (
        <div>
        <Header />
        <img src={Smile} alt=""></img>
        </div>
    );
}

export default Home