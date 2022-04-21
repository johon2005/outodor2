import Body_I from "../../styles/Body5.png";
import Rectangle2 from "../../styles/Rectangle_I.png";
import Buy from "../../styles/buy.png";
import Camera from "../../styles/camera.png";
import People from "../../styles/people.png";
import Navigi from "../../styles/navigit.png";
import NavB from "../../styles/navB.png";

function Body5() {
  return (
    <div className="body5-container">
      <img className="Ibody5" src={Body_I} />
      <img className="restangle2" src={Rectangle2} />
      <img className="buy" src={Buy} />
      <p className="buyp">First Aid Kit</p>
      <p className="buypp">Banger Bottle</p>
      <img className="camera" src={Camera} />
      <p className="camerap">Brian Schultz</p>
      <img className="people" src={People} />
      <p className="peoplep">Leah Stoff</p>
      <img className="navigi" src={Navigi} />
      <p className="navigip">Catalina, California</p>
      <img className="naB" src={NavB} />
      <p className="naS">Shop</p>
      <p className="napp">Check out our products.</p>
      <p className="naPpp">
        Morbi neque ex, condimentum dapibus congue et, vulputate ut 
        <br />
        ligula.
        Vestibulum sit amet urna turpis. Mauris euismod elit et nisi 
        <br />
        ultrices,
        ut faucibus orci tincidunt.
      </p> 
      <button className="na_btn">Visit shop</button>  
      99 345-33-14
    </div>
  );
}
export default Body5;
