import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from '../../hooks/use-http';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const {fetchData, isLoading, error} = useHttp('meals',{method:'GET'});

  useEffect(async ()=>{
    const data = await fetchData();
    const _meals = [];
    console.log(data);
    for(let meal in data){
      _meals.push({
        id:meal,
        ...data[meal]
      })
    }
    setMeals(_meals);
  },[])



  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading && !error && <ul>{mealsList}</ul>}
        {error && <p>Something went wrong</p>}
        {isLoading && <p>Loading...</p>}
        {mealsList.length===0 && !isLoading &&<p>Nothing found</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
