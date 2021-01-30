import NavItem from "./Nav-item";

function handleCallback(data,props){
  props.callback(data)
}

function Navbar(props) {
  return (
    <>
      <h1 className="my-3 text-center">PERTINENT TIMES</h1>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light border-top border-bottom border-dark">
        <button
          className="navbar-toggler mx-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <NavItem name="Arts" callback={(data)=>{handleCallback(data,props)}}/>
              <NavItem name="Food" callback={(data)=>{handleCallback(data,props)}}/>
              <NavItem name="Movies" callback={(data)=>{handleCallback(data,props)}}/>
              <NavItem name="Science" callback={(data)=>{handleCallback(data,props)}} />
              <NavItem name="Sports" callback={(data)=>{handleCallback(data,props)}}/>
              <NavItem name="Travel" callback={(data)=>{handleCallback(data,props)}}/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
