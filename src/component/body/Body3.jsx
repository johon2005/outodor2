import Flower from "../../styles/Flower.png";
import Rectangle from "../../styles/Rectangle.png";
import Shit from "../../styles/Zashita.png";
import Mountain from "../../styles/tog.png";
import Paper from "../../styles/paper.png";
import Pen from "../../styles/pen.png";
import Eye from "../../styles/eye.png";

function Body3() {
  return (
    <div className="bd3">
      <p className="b2p">Our promise</p>
      <h1 className="body3h1">Setting the bar for our products.</h1>
      <p className="bd3p">
        Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
        <br />
        Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
        ut faucibus orci tincidunt.
      </p>
      <div className="dflr">
        <img className="flr1" src={Rectangle} />
        <img className="flr" src={Flower} />
        <p className="flrp">Sustainable sourcing</p>
        <p className="flrpp">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <img className="shit1" src={Rectangle} />
        <img className="shit" src={Shit} />
        <p className="shitp">Lifetime warranty</p>
        <p className="shitpp">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <img className="tog1" src={Rectangle} />
        <img className="tog" src={Mountain} />
        <p className="togp">All-terrain tested</p>
        <p className="togpp">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
      </div>

      <div className="line2">
        <img className="paper_r" src={Rectangle} />
        <img className="paper" src={Paper} />
        <p className="paperp">Premium materials</p>
        <p className="paperpp">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>

        <img className="pen1" src={Rectangle} />
        <img className="pen" src={Pen} />
        <p className="penp">Designed by you</p>
        <p className="penpp">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <img className="eye1" src={Rectangle} />
        <img className="eye" src={Eye} />
        <p className="eyep">Quality assured</p>
        <p className="eyepp">
          Lorem ipsum dolor sit amet, consectetur
          <br />
          adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
      </div>
    </div>
  );
}
export default Body3;
