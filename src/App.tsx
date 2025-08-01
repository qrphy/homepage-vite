import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="name">
        <h1>Furkan Titiz</h1>
        <p>
          I'm currently working on frontend projects and sharing them on
          <a
            href="https://github.com/qrphy"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>
          .
        </p>
        <p>
          Feel free to check them out and reach out for{" "}
          <a href="mailto:furkantitiz96@gmail.com">collaboration</a>.
        </p>
      </div>
      <div className="about">
        <p>
          Outside of coding, I enjoy watching F1 races, tennis matches, and
          listening to music.
        </p>
      </div>
      <div className="contact">
        <h4>Contact</h4>
        <p>
          You can reach me via email at{" "}
          <a href="mailto:furkantitiz96@gmail.com">furkantitiz96@gmail.com</a>,
          or catch me on{" "}
          <a href="https://www.linkedin.com/in/furkan-titiz/">LinkedIn</a>.
        </p>
      </div>
      <div className="home-image">
        <img
          src="YoungKnight.jpg"
          alt="Young Knight in a Landscape by Vittore Carpaccio 1510"
          className="portrait-img"
        />
        <p>Young Knight in a Landscape by Vittore Carpaccio 1510</p>
      </div>
    </div>
  );
}

export default App;
