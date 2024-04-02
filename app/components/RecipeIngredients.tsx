import React from 'react';
import SectionTitle from './SectionTitle';

interface Props {
  ingredients: string[];
}
const RecipeIngredients: React.FC<Props> = ({ ingredients }) => {
  return (
    <div className="-mb-2">
      <SectionTitle text="Ingredients" />
      <ul className="list-disc list-inside indent-2 marker:text-nutmeg marker:text-xs pl-0.5">
        {ingredients.map((ingredient) => (
          <li className="text-wengebrown mb-2">
            <span className="pl-4 font-light">{ingredient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
