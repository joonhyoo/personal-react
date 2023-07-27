import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="welcome-text">Welcome</h1>
        <div className="intro-text">
          <span>My name is Joon,</span>
          <span id="cycle"></span>
        </div>
      </div>
    </div>
  );
}

export default Home;
