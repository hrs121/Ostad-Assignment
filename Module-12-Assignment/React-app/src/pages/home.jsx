import HomeComponent1 from '../Components/Home/homeCom1'; // Import your components
import HomeComponent2 from '../Components/Home/homeCom2';
import HomeComponent3 from '../Components/Home/homeCom3';
import HomeComponent4 from '../Components/Home/homeCom4';

const Home = () => {
  return (
    <div className="home">
      <h1>Home Page</h1>
      <HomeComponent1 />
      <HomeComponent2 />
      <HomeComponent3 />
      <HomeComponent4 />
    </div>
  );
};

export default Home;
