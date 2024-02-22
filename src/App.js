import { InstagramLogo, LinkedinLogo, GithubLogo, EnvelopeSimple } from 'phosphor-react';

import './App.css';
import RodizioHB from './components/house-burguer';
import MarcadorDeTruco from './components/marcador-de-truco';

function App() {
    
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
      <MarcadorDeTruco />
    </>
  )
}

export default App;
