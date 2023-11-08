import BlogComponent1 from '../Components/Blog/blogCom1'; // Import your components
import BlogComponent2 from '../Components/Blog/blogCom2';
import BlogComponent3 from '../Components/Blog/blogCom3';
import BlogComponent4 from '../Components/Blog/blogCom4';

const Blog = () => {
  return (
    <div className="blog">
      <h1>Blog Page</h1>
      <BlogComponent1 />
      <BlogComponent2 />
      <BlogComponent3 />
      <BlogComponent4 />
    </div>
  );
};

export default Blog;
