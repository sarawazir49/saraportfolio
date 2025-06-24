import myKidsImg from '../images/mykids.jpg';
import futureDevImg from '../images/futureDev.jpeg';
import teamworkImg from '../images/teamwork.jpg';

const About = () => (
  <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-gray-800 space-y-16">
      
      {/* Who is Sara Section */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold text-blue-800 text-center">Who is Sara?</h2>
        <img
          src={myKidsImg}
          alt="Sara's family"
          className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
        />
        <div className="text-lg leading-relaxed text-center sm:text-left space-y-4">
          <p>
            I'm Sara Al Wazir, a 39-year-old from Lebanon. I moved to Sweden in 2013 to start a new life and raise a family. I'm now a proud mom of three: Rima, Dima, and Adam.
          </p>
          <p>
            I earned a degree in ICT from the Arab Open University in 2012. In Sweden, I first worked in elderly care, then supported refugee teens as a teaching assistant.
          </p>
        </div>
      </section>

      {/* Future Developer Section */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold text-green-700 text-center">Future Developer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={futureDevImg}
            alt="Coding concept"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
          <img
            src={teamworkImg}
            alt="Developer collaboration"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="text-lg leading-relaxed space-y-4 mt-4">
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
  </div>
);

export default About;
