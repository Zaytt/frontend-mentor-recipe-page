import React from 'react';

interface Props {
  name: string;
  desc: string;
}

const RecipeOverview: React.FC<Props> = ({ name, desc }) => {
  return (
    <div className="mb-8">
      <h1 className="font-serif text-4xl font-light text-darkcharcoal mb-6 capitalize">
        {`${name} recipe`}
      </h1>
      <p className="text-wengebrown font-light">{desc}</p>
    </div>
  );
};

export default RecipeOverview;
