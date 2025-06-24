import myKidsImg from '../images/mykids.jpg';
import futureDevImg from '../images/futureDev.jpeg';
import teamworkImg from '../images/teamwork.jpg';

const About = () => (
  <div className="about-container p-6 max-w-4xl mx-auto text-gray-800">
    <main className="space-y-10">
      {/* Who is Sara Section */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold text-blue-700">Who is Sara?</h1>
        <img
          src={myKidsImg}
          alt="Sara's family"
          className="w-full max-w-md mx-auto rounded-2xl shadow-md"
        />
        <p>
          I'm Sara Al Wazir, 39 years old, originally from Lebanon. I moved to Sweden in 2013 to start a new chapter and build a family. I'm now a proud mom of three wonderful kids: Rima, Dima, and Adam.
        </p>
        <p>
          I graduated with a degree in ICT from the Arab Open University in 2012. After moving to Sweden, I worked in elderly care and later as a teaching assistant for refugee teenagers.
        </p>
      </section>

      {/* Future Developer Section */}
      <section className="space-y-4">
          <img
            src={futureDevImg}
            alt="Coding concept"
            className="w-full md:w-1/2 rounded-2xl shadow-md"
          />
          <img
            src={teamworkImg}
            alt="Developer collaboration"
            className="w-full md:w-1/2 rounded-2xl shadow-md"
          />
        <p>
          I'm passionate about becoming a developer. It's a field full of creativity, problem-solving, and continuous learning.
        </p>
        <p>
          There’s a growing demand for developers, with many opportunities and the benefit of remote work for better work-life balance.
        </p>
        <p>
          Programming isn’t just technical—it’s also social. Collaboration and teamwork are key parts of building great software.
        </p>
        <p>
          I'm excited for the journey ahead and motivated to grow in this rewarding and dynamic career path.
        </p>
      </section>
    </main>
  </div>
);

export default About;
