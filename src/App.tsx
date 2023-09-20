import './App.css'
import { useState } from 'react';
import { PersonalInformation, AddressInformation, AccountInformation } from './containers';


const App = () => {

  const [page, setPage] = useState<number>(0);

    const handlePrev = () => {
    if(page >= 0) {
        setPage((prevPage) => prevPage - 1);
    }

    return
    }

    const handleNext = () => {
      if(page <= 2) {
      setPage((nextPage) => nextPage + 1);
    }

    return
    }


  return (
    <form>

    { page === 0 && <PersonalInformation handleNext={handleNext} handlePrev={handlePrev} /> }
    { page === 1 && <AddressInformation handleNext={handleNext} handlePrev={handlePrev} /> }
    { page === 2 && <AccountInformation handleNext={handleNext} handlePrev={handlePrev}/> }

    </form>
  )
}


export default App