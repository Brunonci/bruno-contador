import '../styles/home.css';
import ThemeToggleButton from './ThemeToggleButton';
import CounterButton from './CounterButton';

const Home = () => {
  return (
    <div className="Home">
      <h1>Home</h1>
      <ThemeToggleButton />
      <CounterButton />
    </div>
  );
};

export default Home;