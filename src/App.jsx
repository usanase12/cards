import React from 'react'
import Cards from './components/cards'

function App() {
  return (<>
  <h1 className='text-2xl font-bold text-center mt-7'>featured Article</h1>
  <div className='flex flex-row justify-center space-x-4 mt-6 p-5'>
    
       <Cards name="Crime" post="Fugitive flamingo spotted in florida" username='Anna Lane' images="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Thinornis_rubricollis_-_Orford.jpg/1024px-Thinornis_rubricollis_-_Orford.jpg"/>
      <Cards name="wildlife" post='Journey to the End of the Earth' username='Arlene McCoy'images="https://www.telegraph.co.uk/content/dam/Travel/2017/October/beach-animals-flamingoes.jpg"/>
      <Cards name="Maline" post='Real and imminent extinction risk' username='Diane Miles'images='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVysPI2300YmTUEEGK_j7MUn85Qa0vse_nlbrLwzLqEA&s'/>
    </div>
  </>
    
  )
}

export default App