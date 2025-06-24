import myKidsImg from '../images/mykids.jpg';
import futureDevImg from '../images/futureDev.jpeg';
import teamworkImg from '../images/teamwork.jpg';

const About = () => (
  <div className="about-container">
    <div className="about-content">
      
      {/* Who is Sara Section */}
      <section className="about-section">
        <h2 className="section-title">Who is Sara?</h2>
        <img
          src={myKidsImg}
          alt="Sara's family"
          className="about-image"
        />
        <div className="about-text">
          <p>
            I'm Sara Al Wazir, a 39-year-old from Lebanon. I moved to Sweden in 2013 to start a new life and raise a family. I'm now a proud mom of three: Rima, Dima, and Adam.
          </p>
          <p>
            I earned a degree in ICT from the Arab Open University in 2012. In Sweden, I first worked in elderly care, then supported refugee teens as a teaching assistant.
          </p>
        </div>
      </section>

      {/* Future Developer Section */}
      <section className="about-section">
        <h2 className="section-title section-green">Future Developer</h2>
        <div className="image-grid">
          <img
            src={futureDevImg}
            alt="Coding concept"
            className="about-image"
          />
          <img
            src={teamworkImg}
            alt="Developer collaboration"
            className="about-image"
          />
        </div>

        <div className="about-text">
          <p>
            I'm passionate about becoming a developer—it's a field full of creativity, challenges, and lifelong learning.
          </p>
          <p>
            The demand for developers is rising. I’m excited by the flexibility it offers, including remote work and a great work-life balance.
          </p>
          <p>
            Programming isn’t just about code—it's about collaboration and building solutions together.
          </p>
          <p>
            I’m motivated to grow and contribute to this dynamic and rewarding industry.
          </p>
        </div>
      </section>
    </div>

    {/* Embedded CSS for the design */}
    <style>
      {`
        .about-container {
          background-color: #fff;
          padding: 3rem 1rem;
          color: #333;
          font-family: Arial, sans-serif;
        }

        .about-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .about-section {
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #1e40af;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .section-green {
          color: #047857;
        }

        .about-image {
          width: 100%;
          max-width: 400px;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: block;
          margin: 0 auto 1.5rem auto;
        }

        .image-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .image-grid {
            flex-direction: row;
          }
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.7;
          padding: 0 1rem;
        }

        .about-text p {
          margin-bottom: 1rem;
        }
      `}
    </style>
  </div>
);

export default About;
