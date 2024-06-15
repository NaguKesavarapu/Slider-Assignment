import React, { useState } from 'react';
import Slider, { SliderProps } from './components/Slider';

const App: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number | number[]>(50);

  const handleSliderChange = (value: number | number[]) => {
    setSliderValue(value);
    console.log("Slider Value:", value);
  };

  return (
    <div className="App">
      <h1>Slider Component Demo</h1>
      <Slider 
        type="Continuous" 
        subType="Single" 
        handleSize="Size_24" 
        onChange={handleSliderChange} 
      />
      <p>Selected Value: {Array.isArray(sliderValue) ? `${sliderValue[0]} - ${sliderValue[1]}` : sliderValue}</p>
    </div>
  );
};

export default App;
