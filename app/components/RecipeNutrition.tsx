import React from 'react';
import SectionTitle from './SectionTitle';
import Separator from './Separator';

interface Props {
  nutrition: {
    notes: string;
    calories: number;
    carbs: number;
    protein: number;
    fat: number;
  };
}

const RecipeNutrition: React.FC<Props> = ({ nutrition }) => {
  const { notes, calories, carbs, protein, fat } = nutrition;
  const macros = {
    calories: `${calories}kcal`,
    carbs: `${carbs}g`,
    protein: `${protein}g`,
    fat: `${fat}g`,
  };

  const entries = Object.entries(macros);

  return (
    <div>
      <SectionTitle text="Nutrition" />
      <p className="text-wengebrown mb-6">{notes}</p>
      <div className="pl-8">
        {entries.map(([key, value], index) => (
          <React.Fragment>
            <div className="grid grid-cols-2">
              <span className="capitalize">{key}</span>
              <span className="text-nutmeg font-medium">{value}</span>
            </div>
            {index !== entries.length - 1 && (
              <div className="my-1.5 border-lightgrey border-b w-full"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RecipeNutrition;
