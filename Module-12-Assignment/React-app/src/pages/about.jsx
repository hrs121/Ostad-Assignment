import AboutComponent1 from '../Components/About/aboutCom1'; // Import your components
import AboutComponent2 from '../Components/About/aboutCom2';
import AboutComponent3 from '../Components/About/aboutCom3';
import AboutComponent4 from '../Components/About/aboutCom4';

const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <AboutComponent1 />
      <AboutComponent2 />
      <AboutComponent3 />
      <AboutComponent4 />
    </div>
  );
};

export default About;
