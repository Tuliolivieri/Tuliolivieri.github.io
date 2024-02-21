
import { useEffect, useState } from 'react';

function RodizioHB () {
  const [meals, setMeals] = useState([]);

    const burguers = [
      {
        id: 0,
        name: 'Pulp Fiction',
        count: 0,
      },
      {
        id: 1,
        name: 'Ultimato',
        count: 0,
      },
      {
        id: 2,
        name: 'Cidade de Deus',
        count: 0,
      },
      {
        id: 3,
        name: 'Capitão Fantástico',
        count: 0,
      },
    ];

    useEffect(() => {
      const historicMeals = localStorage.getItem('meals');

      historicMeals ? setMeals(JSON.parse(historicMeals)) : setMeals([...burguers]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  function setCount(index, increment) {
    const mealsToUpdate = [...meals];

    if (mealsToUpdate[index].count <= 0 && increment <= 0) return;

    mealsToUpdate[index].count += increment;

    setMeals(mealsToUpdate);

    localStorage.setItem('meals', JSON.stringify(meals));
  }

  function clearStorage() {
    setMeals(burguers);

    localStorage.setItem('meals', JSON.stringify(burguers));
  }

  return <>
  <div className='bg-yellow-500 w-full h-full justify-center items-center flex flex-col'>
        <div className='h-20 text-2xl text-center pt-6'>Rodízio House Burguer</div>
        <table className='mt-7 mb-7'>
          <thead><tr><td className='font-bold flex justify-center'>Lanche</td><td></td><td className='font-bold  flex justify-center'>Qtde</td><td></td></tr></thead>
          <tbody>
          {
            meals.map((meal, index) => {
              return (
                <tr key={meal.id}>
                    <td className='w-48'>{ meal.name } </td>
                    <td><button className='w-10 text-yellow-400 bg-black font-bold rounded-md' onClick={() => { setCount(index, -1)}}>-</button> </td>
                    <td className='w-10'><label className='flex justify-center'>{ meal.count }</label> </td>
                    <td><button className='w-10 text-yellow-400 bg-black font-bold rounded-md' onClick={() => { setCount(index, 1)}}>+</button> </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
        <button className='bg-black text-yellow-400 hover:bg-gray-700 w-60 border-2 border-gray-700 mt-7 mb-7' onClick={() => { clearStorage() }}>Apagar Pedidos</button>
      </div></>
}

export default RodizioHB;
