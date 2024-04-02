import React from 'react';
import SectionTitle from './SectionTitle';

interface Props {
  instructions: string[];
}

const RecipeInstructions: React.FC<Props> = ({ instructions }) => {
  return (
    <div>
      <SectionTitle text="Instructions" />
      <div className="">
        {instructions.map((instruction, index) => {
          const [action, desc] = instruction.split(':', 2);

          return (
            <div className="font-medium text-nutmeg pl-2 flex mb-2">
              <span className="font-semibold">{index + 1}.</span>
              <span className="pl-6 text-wengebrown">
                <span className="font-semibold">{`${action}:`}</span>
                <span className="font-light">{desc}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeInstructions;
