import React from 'react';

interface Props {
  total: string;
  prep: string;
  cooking: string;
}

const RecipePrepTime: React.FC<Props> = ({ total, prep, cooking }) => {
  return (
    <div className="rounded-xl w-full p-7 bg-rosewhite mb-8">
      <h2 className="text-darkraspberry text-xl mb-4 font-medium">
        Preparation time
      </h2>
      <ul className="list-disc list-inside indent-1 text-wengebrown marker:text-darkraspberry marker:text-xs pl-0.5">
        <li className="mb-2">
          <span className="font-bold pl-4">Total: </span>
          {total}
        </li>
        <li className="mb-2">
          <span className="font-bold pl-4">Preparation: </span>
          {prep}
        </li>
        <li>
          <span className="font-bold pl-4">Cooking: </span>
          {cooking}
        </li>
      </ul>
    </div>
  );
};

export default RecipePrepTime;
