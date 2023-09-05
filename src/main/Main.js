import style from "./Main.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import mePhoto from "../assets/image/me.jpg";
import Particles from "react-particles-js";
import Fade from "react-reveal/Fade";
import ReactTypingEffect from "react-typing-effect";
import { Tilt } from "react-tilt";

const particlesOpt = {
  "particles": {
      "number": {
          "value": 50
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 25, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function Main() {
  return (
    <div id={"main"} className={style.mainBlock}>
      <Particles className={style.particles} params={particlesOpt} />
      <Fade left>
        <div className={`${styleContainer.container} ${style.mainContainer}`}>
          <Tilt options={defaultOptions}>
          <div className={style.photoWrapper}>
            <img src={mePhoto} className={style.photo} alt={"my photo"} />
          </div>
          </Tilt>
         
          <div className={style.text}>
            <span className={style.hi}>Hi There</span>
            <Tilt options={defaultOptions}>
            <h1 className={style.intro}>
              I am
              <br />
              Inna Groznaya
            </h1>
            </Tilt>
            <p className={style.profession}><ReactTypingEffect text={"Frontend Developer."}/></p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Main;