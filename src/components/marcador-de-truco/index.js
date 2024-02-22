
import { useEffect, useState } from 'react';

function MarcadorDeTruco () {
  const trucoTeams = [
    {
      name: 'Time 1',
      points: 0,
      matches: 0, 
    },
    {
      name: 'Time 2',
      points: 0,
      matches: 0,
    }
  ];

  const [truco, setTruco] = useState([...trucoTeams]);

    useEffect(() => {
      const historicTeams = localStorage.getItem('truco');

      historicTeams ? setTruco(JSON.parse(historicTeams)) : setTruco([...trucoTeams]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  function setPoints(index, increment) {
    const teamsToUpdate = [...truco];

    if (teamsToUpdate[index].points <= 0 && increment <= 0) return;

    if (teamsToUpdate[index].points + increment >= 12) increment = 12 - teamsToUpdate[index].points;

    teamsToUpdate[index].points += increment;

    setTruco(teamsToUpdate);

    localStorage.setItem('truco', JSON.stringify(truco));
  }

  function clearStorage() {
    setTruco(trucoTeams);

    localStorage.setItem('truco', JSON.stringify(trucoTeams));
  }

  return <>
  <div className='bg-gray-700 w-full h-full justify-center items-center flex flex-col'>
        <div className='h-20 text-purple-400  text-2xl text-center pt-6'>Marcador de Truco</div>
        <div className='flex flex-row'>
          <div className='flex flex-col m-16'>
            <button className='bg-black text-purple-400 hover:bg-gray-700 w-20 border-2 border-gray-700 mt-7 mb-7' onClick={ () => setPoints(0, -1)}>-1</button>
            <label className='text-4xl text-purple-400 text-center flex justify-center'>{truco[0].points}</label>
            <button className='bg-black text-purple-400 hover:bg-gray-700 w-20 border-2 border-gray-700 mt-7 mb-7' onClick={ () => setPoints(0, 1)}>+1</button>
            <button className='bg-black text-purple-400 hover:bg-gray-700 w-20 border-2 border-gray-700 mt-7 mb-7' onClick={ () => setPoints(0, 3)}>+3</button>
          </div>
          <div className='flex flex-col m-16'>
            <button className='bg-black text-purple-400 hover:bg-gray-700 w-20 border-2 border-gray-700 mt-7 mb-7' onClick={ () => setPoints(1, -1)}>-1</button>
            <label className='text-4xl text-purple-400 text-center flex justify-center'>{truco[1].points}</label>
            <button className='bg-black text-purple-400 hover:bg-gray-700 w-20 border-2 border-gray-700 mt-7 mb-7' onClick={ () => setPoints(1, 1)}>+1</button>
            <button className='bg-black text-purple-400 hover:bg-gray-700 w-20 border-2 border-gray-700 mt-7 mb-7' onClick={ () => setPoints(1, 3)}>+3</button>
          </div>
        </div>
        <button className='bg-black text-purple-400 hover:bg-gray-700 w-60 border-2 border-gray-700 mt-7 mb-7' onClick={() => { clearStorage() }}>Reiniciar Partida</button>
      </div></>
}

export default MarcadorDeTruco;
