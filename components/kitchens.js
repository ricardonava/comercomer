/* eslint-disable react/prop-types */
import Card from './card';

export default ({ kitchens }) => (
  <div className="columns is-multiline">
    {kitchens.map((kitchen) => (
      <div className="column is-one-third">
        <Card props={kitchen} />
      </div>
    ))}
  </div>
);
