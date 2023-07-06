import './style.css';
import CounterPage from '../../pages/CounterPage';
export const Container = ({ children, noSpaces }) => {
  return (
    <div
      className={`main__container ${
        noSpaces ? '' : 'main__container--padding'
      }`}
    >
      {children}
    </div>
  );
};

export default Container;