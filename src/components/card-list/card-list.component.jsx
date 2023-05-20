import Card from '../card/card.component';
import './card-list.style.css';

const CardList = ({ monsters }) => (
  //==== import props given in App.js ======
  // const { monsters } = props;

  <div className="card-list">
    {monsters.map(monster => {
      return <Card monster={monster} />;
    })}
  </div>
);

export default CardList;
