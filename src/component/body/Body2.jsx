import Image2 from "../../styles/Image2.png";
import Pathe from "../../styles/Path.png";
function Body2() {
  return (
    <div className="bob2">
      <div className="bimg">
        <img className="img2" src={Image2} />
      </div>
      <div className="bd2">
        <p className="b2">WHO ARE WE?</p>
        <h1 className="bdh1">A bit about us</h1>
        <div className="bdp">
          <p>
            We are an outdoor gear company focused on Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio
            et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi
            neque ex, condimentum dapibus congue et.
          </p>
          <div className="read">
            <a className="btnr">
              Read more
              <img className="bimg2" src={Pathe} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body2;
