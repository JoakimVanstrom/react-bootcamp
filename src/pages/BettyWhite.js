import Header from "../components/Header";
import BettyData from "../assets/BettyWhite.json"
import BettyWhiteComp from "../components/BettyWhiteComp";

function BettyWhite() {
    const data = BettyData;
    console.log(data);
    return (
        <div>
            <Header />
            <BettyWhiteComp betty={data[0]}/>
        </div>
    )
}

export default BettyWhite;