import Eng1 from "../../styles/eng1.png";
import Path from "../../styles/Path.png";
import Image2 from "../../styles/IMAGE (1).png";
import Image_2 from "../../styles/IMAGE (2).png";
import Image_3 from "../../styles/IMAGE (3).png";
import Hiking from "../../styles/IMAGE (4).png";
import Image5 from "../../styles/IMAGE (5).png";

function Body4() {
  return (
    <div className="body_container">
      <p className="bodyp">Meet the family</p>
      <h2 className="bodyh2">What we have in store for you.</h2>
      <p className="bodypp">
        Morbi neque ex, condimentum dapibus congue et, vulputate ut
        <br />
        ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
        <br />
        ultrices, ut faucibus orci tincidunt.
      </p>
      <div className="rasmla">
        <img className="eng1" src={Eng1} />
        <p className="eng1p">Accessories</p>
        <p className="eng1pp">
          Accessories you didn't know
          <br />
          you needed.
        </p>
        <a className="eng1_V">View</a>
        <a className="eng1_A"> Accessories</a>
        <img className="eng1_Strelka" src={Path} />
        <img className="odam" src={Image2} />
        <p className="odamp">Apparel</p>
        <p className="odampp">
          Check out our line of non-
          <br />
          hiking clothes.
        </p>
        <p className="odam_V">View</p>
        <p className="odam_A">Apparel</p>
        <img className="odam_Strelka" src={Path} />
        <img className="image_2" src={Image_2} />
        <p className="img_C"> Climbing Gear</p>
        <p className="image_2p">Climbing gear for every occasion.</p>
        <p className="image_2V">View</p>
        <p className="image_2C">Climbing Gear</p>
        <img className="image2_Strelka" src={Path} />
        <img className="image_3" src={Image_3} />
        <p className="img3_P">Headwear</p>
        <p className="img_O">
          Our beanies are so comfy you <br /> won't believe it.
        </p>
        <p className="img_V">View</p>
        <p className="img_H">Headwear</p>
        <img className="img_3_strelka" src={Path} />
        <img className="hiking" src={Hiking} alt="" />
        <p className="hikingp">Hiking Gear</p>
        <p className="hikingpp">Desert or mountain? Doesn't matter.</p>
        <p className="hiking_V">View</p>
        <p className="hiking_H">Hiking Gear</p>
        <img className="hiking_strelka" src={Path} />
        <img className="image5" src={Image5} />
        <p className="image5p">Jackets</p>
        <p className="image5pp">
          Our jackets are perfect for every
          <br />
          season.
        </p> 
        <p className="image5_V">View</p> 
        <p className="image5_J">Jackets</p> 
        <img  className="image5_strelka" src={Path}  /> 
        <p className="showA">Show all categories</p> 
        <img className="show_strelka" src={Path} />
      </div>
    </div>
  );
}
export default Body4;
