const Header2 = function () {
  return (
    <>
      <div className="container2 headermenu">
        <div className="btn32">
          <a className="a">Shop</a>
          <a className="a">About us</a>
          <a className="a">Our team</a>
          <a className="a">Buyer`s guides</a>
          <a className="a">Categories</a> 
          <div className="btn_cart">
          <button className="btn">Buy template</button>
          <button className="cart">Cart</button> 
          </div>
        </div>
      </div>
      <div className="hamburgermenu">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bggre"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
export default Header2;
