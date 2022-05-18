import Header from "../components/Header";
import Smile from "../assets/Smile.png";

function Home(){
    const homeStyle = {
        backgroundColor: "#282c34",
        width: "100%",
    }
    return (
        <div>
        <Header />
        <img style={homeStyle} src={Smile} alt=""></img>
        </div>
    );
}

export default Home