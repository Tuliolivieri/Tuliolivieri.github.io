import { InstagramLogo, LinkedinLogo, GithubLogo, EnvelopeSimple } from 'phosphor-react';

import './App.css';

function App() {
  return (
    <div className='bg-black w-full h-20 px-8 border-b border-gray-600 border-solid flex items-stretch'>
      <div className='flex items-center'>
        <h1 className='text-white text-5xl'>
          Tulio Olivieri
        </h1>
      </div>
      <div className='grow'></div>
      <div className='px-10 flex items-center space-x-2'>
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
  )
}

export default App;
