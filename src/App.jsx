import "./App.css";
import { FaLinkedin } from "react-icons/fa";
import { BsShield } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import Header from "./components/header.jsx";
import HoImg from "./assets/paraform_images/paraform.svg";
import ParaSm from "./assets/paraform_images/parasm.svg";
import Cele from "./assets/paraform_images/cele.svg";
import DownRArr from "./assets/paraform_images/downArr.svg";
import SlideHoverButton from "./components/slideHoverButton.jsx";
import ParaformLogoRow from "./components/logoShowcase.jsx";
import ParaformCards from "./components/cardtry.jsx";
import Carosel from "./components/carosel.jsx";
import VdCard from "./components/vdCard.jsx";
import Testimonial from "./components/testimonial.jsx";
import ScrollJack from "./components/scrollJack.jsx";

const logos = [
  "/log1.svg",
  "/log2.svg",
  "/log3.svg",
  "/log4.svg",
  "/log5.svg",
  "/log6.svg",
  "/log7.svg",
  "/log8.svg",
];

function App() {
  return (
    <>
      <main>
        <Header />

        <div className="celebrate">
          <div>
            <img src={ParaSm} alt="para Img" />
            <span>
              <p>Paraform raises $20M to build the future of hiring</p>
              <img src={Cele} alt="celebration icon" />
            </span>
            <img src={DownRArr} alt="DownRArr" />
          </div>
        </div>

        <section className="iconSec">
          <div className="icons">
            <h1>Where iconic companies hire their best talent</h1>
            <h3>Match with expert recruiters and fill your hardest roles.</h3>
            <SlideHoverButton
              text="Get a demo"
              hoverText="Get a demo"
              bgColor="#000"
              textColor="#fff"
              hoverTextColor="#fff"
              borderColor="#000"
              boxShadow="0 0.1px 0.1px rgba(0,0,0,0.3)"
              opacityt={1}
              hoverbg="#333434"
            />
          </div>
          <ParaformLogoRow logos={logos} visibleCount={7} interval={5000} />
        </section>
        <ParaformCards />
      </main>

      <div className="companyHead">
        <h6>
          <span></span> Companies
        </h6>
        <h2>Made for the roles that matter most</h2>
        <p>A recruiting partner as selective as you are.</p>
        <SlideHoverButton
          text="For companies"
          hoverText="For companies"
          bgColor="#000"
          textColor="#fff"
          hoverTextColor="#fff"
          borderColor="#000"
          boxShadow="0 0.1px 0.1px rgba(0,0,0,0.3)"
          opacityt={1}
          hoverbg="#333434"
        />
      </div>

      {/* <section className="scroll_sec">
        <article>
          <div className="text-scro-hol">
            <span>
              <h2>Tap into elite recruiter networks</h2>
              <p>
                Only work with recruiters with a proven track record trusted by
                world-class companies.
              </p>
            </span>
            <span>
              <h3>500+</h3>
              <h6>Companies hiring</h6>
            </span>
          </div>
          <div className="text-scro-hol2">
            <FeatureShowcase />
            <MagneticGrid />
          </div>
        </article>

        <article>
          <div className="text-scro-hol">
            <span>
              <h2>Meet candidates worth meeting</h2>
              <p>
                Cut through the noise with candidates that hit the mark — and
                move fast from intro to interview.
              </p>
            </span>
            <span>
              <h3>70%</h3>
              <h6>Interview rate</h6>
            </span>
          </div>
          <figure>
            <img src={KiaraImg} alt="Kiara" />
          </figure>
        </article>

        <article>
          <div className="text-scro-hol">
            <span>
              <h2>Hire faster with fewer hurdles</h2>
              <p>
                Streamlined workflows, no back-and-forth, no admin — just
                pre-vetted warm intros, fast.
              </p>
            </span>
            <span>
              <h3>3X</h3>
              <h6>Faster to hire</h6>
            </span>
          </div>
          <figure>
            <img src="/rigImg.png" alt="ss" />
          </figure>
        </article>

        <article>
          <div className="text-scro-hol">
            <span>
              <h2>White glove support</h2>
              <p>
                Your dedicated talent strategist is always a call or Slack away
                — actively managing your search and surfacing market trends.
              </p>
            </span>
            <span>
              <h3>98%</h3>
              <h6>Satisfaction rate</h6>
            </span>
          </div>
          <figure>
            <img src={Candate} alt="Candate" />
          </figure>
        </article>
      </section> */}
      <ScrollJack />

      {/* <section className="cardSlide">
        <div className="companyHead">
          <h6>
            <span></span> Recruiters
          </h6>
          <h2>What recruiter-first really looks like</h2>
          <p>
            We provide you with quality roles, powerful tools, and all the
            support you need.
          </p>
          <SlideHoverButton
            text="Get a demo"
            hoverText="Get a demo"
            bgColor="#ffffff"
            textColor="#000000"
            hoverTextColor="#000000"
            borderColor="transparent"
            boxShadow="0"
            opacityt={1}
            hoverbg="#ffffff"
          />
        </div>

        <Carosel />

        <div className="busDev">
          <figure>
            <h3>Say goodbye to business development</h3>
            <img src="/sofware.svg" alt="sofware img" />
            <p>
              We handle the business development, you focus on placing great
              talent. Paraform connects you to roles from high-growth startups
              and category leading enterprises.
            </p>
          </figure>

          <div>
            <figure>
              <h3>All the tools to make recruiting easy</h3>
              <p>
                Access an all-in-one toolkit with sourcing, CRM, notetaker,
                scheduler and more—completely free of charge.
              </p>
              <img src="/serinp.png" alt="serImage" />
            </figure>
            <figure>
              <h3>Leave the follow-ups to us</h3>
              <p>
                From client comms to feedback and payments, we manage the manual
                work so you can stay focused on recruiting.
              </p>
              <img src="/folup.png" alt="folup" />
            </figure>
          </div>
        </div>

        <div className="vdSec">
          <article>
            <span>
              <h3>Let AI do the heavy lifting</h3>
              <p>
                AI to supercharge recruiters, not to replace. Focus on what
                drives results: real conversations and stronger candidate
                relationships.
              </p>
            </span>
          </article>
          <VdCard />
        </div>
      </section>

      <div className="growthHead">
        <h3>Trusted by high-growth teams</h3>
        <SlideHoverButton
          text={
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                color="#000"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.3265 8.99259H4.17969C3.35126 8.99259 2.67969 8.32101 2.67969 7.49259V3.25M13.3265 8.99259L9.24136 5.20789M13.3265 8.99259L9.24136 12.7473"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Customer stories</span>
            </span>
          }
          hoverText={
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M13.3265 8.99259H4.17969C3.35126 8.99259 2.67969 8.32101 2.67969 7.49259V3.25M13.3265 8.99259L9.24136 5.20789M13.3265 8.99259L9.24136 12.7473"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Customer stories</span>
            </span>
          }
          bgColor="#f1f4f2"
          textColor="#000"
          hoverTextColor="#000"
          borderColor="rgb(227, 227, 227)"
          boxShadow="0 0.1px 0.1px rgba(0,0,0,0.3)"
          opacityt={0.7}
          hoverbg="0"
        />
      </div> */}

      {/* <Testimonial /> */}

      <section className="demo">
        <h3>Let us be your competitive advantage</h3>
        <p>
          Join world-class teams using Paraform to fill their most important
          roles in record time.
        </p>
        <SlideHoverButton
          text="Get a demo"
          hoverText="Get a demo"
          bgColor="#000"
          textColor="#fff"
          hoverTextColor="#fff"
          borderColor="#000"
          boxShadow="0 0.1px 0.1px rgba(0,0,0,0.3)"
          opacityt={1}
          hoverbg="#333434"
        />
      </section>

      <footer>
        <div className="footCont">
          <figure>
            <img className="homeImg" src={HoImg} alt="homImg" />
          </figure>
          <div>
            <ul>
              <p>Product</p>
              <li>For companies</li>
              <li>For recruiters</li>
            </ul>

            <ul>
              <p>Company</p>
              <li>Careers</li>
              <li>About</li>
              <li>Customers</li>
              <li>Blog</li>
              <li>Help center</li>
            </ul>

            <ul>
              <p>Use cases</p>
              <li>Early stage</li>
              <li>Growth stage</li>
              <li>Enterprise</li>
            </ul>
          </div>
        </div>

        <div className="footCont ff">
          <p>© Paraform Inc. 2025</p>

          <span>
            <p>Terms of use</p>
            <p>Privacy policy</p>
          </span>

          <span>
            <h6>
              <BsShield /> SOC 2 Certified
            </h6>
            <FaLinkedin size={15} />
            <BsTwitterX size={15} />
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
