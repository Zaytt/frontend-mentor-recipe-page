import React from 'react';

interface RecipeImageProps {
  src: string;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ src }) => {
  return (
    <div className="sm:shadow-custom sm:rounded-xl sm:border-black sm:border-[1px] mb-10 -mx-10 -mt-10 sm:mx-0 sm:mt-0">
      <img className="rounded-xl" id="recipe-image" src={src} />
    </div>
  );
};

export default RecipeImage;
