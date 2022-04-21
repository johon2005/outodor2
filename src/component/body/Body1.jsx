import Image1 from "../../styles/IMAGE.png";
const Body1 = function () {
  return (
    <div className="Body1_conatainer">
      <div>
        <Cbody />
        <img className="img" src={Image1} />
      </div>
    </div>
  );
};

export default Body1;

export function Cbody() {
  return (
    <div>
      <p className="cimg">OUTDOOR EXPLORATION</p>

      <h1 className="ch1">Gear for when it </h1>

      <h1 className="ch2">actually matters</h1>
      <p className="cp">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="cp2">
        Suspendisse varius enim in eros elementum tristique.
      </p>
      <div className=""></div>
    </div>
  );
}
