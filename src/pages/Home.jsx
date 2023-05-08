import "../components/Home/Home.css";
import Leftside from "../components/Home/Leftside";
import Rightside from "../components/Home/Rightside";

const Home = () => {
  return (
    <div className="Home">
      <Leftside />
      <Rightside />
    </div>
  );
};

export default Home;
