import React, {useState} from 'react';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import Presentation from './components/Presentation/Presentation';
import Service from './components/Service/Service';
import './App.css';

function App() {
  const [isOpenPresentation, setIsOpenPresentation] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);
  const togglePresentation = () => {
      setIsOpenPresentation(currentValue => !currentValue)
      if(isOpenService) {
        setIsOpenService(false)
      }
  };
  const toggleService = () => {
    setIsOpenService(currentValue => !currentValue)
    if(isOpenPresentation) {
      setIsOpenPresentation(false);
    }
  }
  return (
    <>
      <BackgroundImage />
      <Presentation isOpen={isOpenPresentation} onclick={togglePresentation}/>
      <Service isOpen={isOpenService} onclick={toggleService}
      title={"Sperry Tent Hire"} 
      content={"We are the exclusive Victorian supplier of these beautiful sailcloth marquees"} />
    </>
  );
}

export default App;
