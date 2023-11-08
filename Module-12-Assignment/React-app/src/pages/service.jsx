import ServiceComponent1 from '../Components/Service/serviceCom1'; // Import your components
import ServiceComponent2 from '../Components/Service/serviceCom2';
import ServiceComponent3 from '../Components/Service/serviceCom3';
import ServiceComponent4 from '../Components/Service/serviceCom4';

const Service = () => {
  return (
    <div className="service">
      <h1>Service Page</h1>
      <ServiceComponent1 />
      <ServiceComponent2 />
      <ServiceComponent3 />
      <ServiceComponent4 />
    </div>
  );
};

export default Service;
