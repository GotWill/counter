import { useState } from 'react'
import * as C from './styles' 

 export const App = () => {

   const [counter, setCounter] = useState(0)
   const handleClickAdd = () => {
    setCounter(counter + 1)
  }

  const handleClickDec = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  
  }

  return (
    <C.Container>
      <C.Area>
        <C.title>
          {counter}  
        </C.title>
         <C.AreaButtons>
          <C.ButtonAdd  onClick={handleClickAdd}>
            +
          </C.ButtonAdd>
          <C.ButtonDec onClick={handleClickDec}>
            -
          </C.ButtonDec>
         </C.AreaButtons>
      </C.Area>
    </C.Container>
  )
}

