import './card-list.style.scss';

import { Monster } from '../../App';
import Card from '../card/card.component';

type CardListProps = {
 monsters: Monster[]
}

const CardList = ({ monsters }:CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card monster={monster} key={monster.id} />
    ))}
  </div>
);

export default CardList;
