import { babyFoods } from '@/app/lib/placeholder-data';

export default function Page() {

  const foods = babyFoods.map((food, index) => {
    return <div key={index}>
      <input type="checkbox" name="food" value={food.name}/>
      <label>{food.name}</label>
    </div>
  })

  return (
    <div>
      <p>What did your baby eat today?</p>

      {foods}
    </div>
  );
}