import { InstagramLogo, LinkedinLogo, GithubLogo, EnvelopeSimple } from 'phosphor-react';

import './App.css';
import { useEffect, useState } from 'react';

function App() {
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

  return (
    <>
      <div className='bg-black w-full h-20 px-8 border-b border-violet-900 border-solid flex justify-center'>
        <div className='px-10 flex items-center justify-between space-x-2'>
          <a href='https://www.linkedin.com/in/tuliolivieri/' rel='noreferrer' target='_blank'>
            <LinkedinLogo size={32} color='teal' weight='bold' />
          </a>
          <a href='https://github.com/Tuliolivieri' rel='noreferrer' target='_blank'>
            <GithubLogo size={32} color='white' weight='duotone' />
          </a>
          <a href='mailto:tuliolivieri@gmail.com'>
            <EnvelopeSimple size={32} color='red' weight='duotone' />
          </a>
          <a href='https://www.instagram.com/tuliolivieri/' rel='noreferrer' target='_blank'>
            <InstagramLogo size={32} color='purple' weight='bold' />
          </a>
        </div>
      </div>
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
      </div>
    </>
  )
}

export default App;
