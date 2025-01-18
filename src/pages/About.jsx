import "./About.css";
import vanImg from "../assets/van1.png";
const About = () => {
  return (
    <div className="about">
      <img src={vanImg} alt="picture of  van" />
      <article>
        <h2>Why use a cab when you could use a Van ?</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ab
          pariatur, vel qui porro odit dolores id culpa, ducimus omnis officia
          autem provident sit adipisci, at s unt repellendus molestias
          dignissimos!
        </p>
        <div className="advert">
          <h2>Time to join the Van Life</h2>
          <button>Explore our vans</button>
        </div>
      </article>
    </div>
  );
};

export default About;
