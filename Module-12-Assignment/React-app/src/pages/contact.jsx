import ContactComponent1 from '../Components/Contact/contactCom1'; // Import your components
import ContactComponent2 from '../Components/Contact/contactCom2';
import ContactComponent3 from '../Components/Contact/contactCom3';
import ContactComponent4 from '../Components/Contact/contactCom4';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Page</h1>
      <ContactComponent1 />
      <ContactComponent2 />
      <ContactComponent3 />
      <ContactComponent4 />
    </div>
  );
};

export default Contact;
