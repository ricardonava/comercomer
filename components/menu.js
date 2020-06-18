/* eslint-disable react/prop-types */
import Card from './meal-card';

export default ({ meals }) => (
  <div className="columns is-multiline">
    {meals.map((meal) => (
      <div className="column is-one-third">
        <Card props={meal} />
      </div>
    ))}
  </div>
);
