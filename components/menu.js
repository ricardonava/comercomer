/* eslint-disable react/prop-types */
import Card from './meal-card';

export default ({ meals }) => {
  return (
    <div className="columns is-multiline">
      {meals.kitchen.comidas.map((meal) => (
        <div className="column is-one-third">
          <Card props={meal} />
        </div>
      ))}
    </div>
  );
};
