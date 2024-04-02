import type { MetaFunction } from '@remix-run/node';
import recipe from './recipe1.json';
import RecipeCard from '~/components/Card';
import RecipeImage from '~/components/RecipeImage';
import RecipeOverview from '~/components/RecipeOverview';
import RecipePrepTime from '~/components/RecipePrepTime';
import RecipeIngredients from '~/components/RecipeIngredients';
import Separator from '~/components/Separator';
import RecipeInstructions from '~/components/RecipeInstructions';
import RecipeNutrition from '~/components/RecipeNutrition';
export const meta: MetaFunction = () => {
  return [
    { title: 'Recipe: Simple Omelette' },
    { name: 'description', content: 'a frontend mentor project' },
  ];
};

export default function Index() {
  const { img, name, desc, preparation, ingredients, instructions, nutrition } =
    recipe;

  return (
    <main>
      <div className="bg-eggshell size-full flex justify-center sm:py-[120px] sm:px-[80px]">
        <RecipeCard>
          <RecipeImage src={img} />
          <RecipeOverview name={name} desc={desc} />
          <RecipePrepTime
            total={preparation.total}
            prep={preparation.preparation}
            cooking={preparation.cooking}
          />
          <RecipeIngredients ingredients={ingredients} />
          <Separator />
          <RecipeInstructions instructions={instructions} />
          <Separator />
          <RecipeNutrition nutrition={nutrition} />
        </RecipeCard>
      </div>
    </main>
  );
}
