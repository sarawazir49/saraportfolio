import e from "../images/sarawaz.jpg";

const Home = () => (
  <>
    <main className="home-container">
      <div className="part1">
        <div className="sarawazi">
          <img
            src={e}
            alt="Sara Al Wazir"
            className="profile-img"
          />
        </div>

        <div className="info1">
          <h1 className="title">Studying IT</h1>
          <p className="paragraph">
            Absolutely! Studying IT can be an exciting and fulfilling journey, and having a dream and passion for it is a great start.
            Dreams indeed have the potential to come true, especially in the dynamic field of IT where innovation and opportunities abound.
            <br /><br />
            Simplifying complex information and taking step-by-step approaches to learning and mastering IT concepts is an excellent strategy.
            <br /><br />
            Continuous learning is crucial in IT as the industry is constantly evolving. Staying updated with new courses and technologies is essential.
            <br /><br />
            Passion is a key ingredient for success in any profession. When you're passionate, you're more likely to stay committed and overcome challenges.
            <br /><br />
            The IT field offers vast opportunities for growth. Stay motivated, keep learning, and nurture your passion for a successful career in IT.
          </p>
        </div>
      </div>

      {/* Mobile-Responsive Styling */}
      <style>
        {`
          .home-container {
            background-color: #f9fafb;
            padding: 1rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
          }

          .part1 {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }

          @media (min-width: 768px) {
            .part1 {
              flex-direction: row;
              align-items: flex-start;
              justify-content: center;
              gap: 2rem;
            }
          }

          .profile-img {
            width: 100%;
            max-width: 300px;
            height: auto;
            border-radius: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }

          .info1 {
            padding: 0.5rem;
            max-width: 100%;
          }

          .title {
            font-size: 2rem;
            font-weight: bold;
            color: #1e3a8a;
            margin-bottom: 1rem;
            text-align: center;
          }

          @media (min-width: 768px) {
            .title {
              text-align: left;
              font-size: 2.5rem;
            }
          }

          .paragraph {
            font-size: 1rem;
            line-height: 1.6;
            text-align: justify;
          }

          @media (min-width: 768px) {
            .paragraph {
              font-size: 1.1rem;
            }
          }
        `}
      </style>
    </main>
  </>
);

export default Home;
