import ProjectComponent1 from '../Components/Project/projectCom1'; // Import your components
import ProjectComponent2 from '../Components/Project/projectcom2';
import ProjectComponent3 from '../Components/Project/projectCom3';
import ProjectComponent4 from '../Components/Project/projectCom4';

const Project = () => {
  return (
    <div className="project">
      <h1>Project Page</h1>
      <ProjectComponent1 />
      <ProjectComponent2 />
      <ProjectComponent3 />
      <ProjectComponent4 />
    </div>
  );
};

export default Project;
