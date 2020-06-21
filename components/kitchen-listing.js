/* eslint-disable react/prop-types */
import Card from './kitchen-card';

export default ({ kitchens }) => (
  <div className="columns is-multiline">
    {kitchens.kitchens.map((kitchen) => (
      <div className="column is-one-third">
        <Card props={kitchen} />
      </div>
    ))}
  </div>
);
