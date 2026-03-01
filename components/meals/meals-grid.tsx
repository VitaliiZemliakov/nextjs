import MealItem, { MealItemProps } from "./meal-item";

interface MealsGridProps {
    meals: MealItemProps[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
    return (
        <ul>
            {meals?.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
};

export default MealsGrid;
