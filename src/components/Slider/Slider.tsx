import React, { useState } from 'react';
import './Slider.scss';
import { Range } from 'react-range';

type SliderType = 'Continuous' | 'Discrete';
type SliderSubType = 'Single' | 'Range';
type HandleSize = 'Size_24' | 'Size_32';

export interface SliderProps { // Export the interface here
  type: SliderType;
  subType: SliderSubType;
  steps?: number;
  handleSize: HandleSize;
  onChange: (values: number | number[]) => void;
}

const Slider: React.FC<SliderProps> = ({ type, subType, steps = 10, handleSize, onChange }) => {
  const [values, setValues] = useState<number[]>(subType === 'Range' ? [0, 50] : [50]);

  const handleChange = (values: number[]) => {
    setValues(values);
    onChange(subType === 'Range' ? values : values[0]);
  };

  return (
    <div className={`slider slider-${handleSize.toLowerCase()}`}>
      <Range
        values={values}
        step={type === 'Discrete' ? 100 / steps : undefined}
        min={0}
        max={100}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div {...props} style={{ ...props.style, height: '36px', display: 'flex', width: '100%' }}>
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                background: `linear-gradient(to right, #548BF4 ${values[0]}%, #ccc ${values[0]}%)`,
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            className={`slider-thumb ${isDragged ? 'dragged' : ''}`}
            style={{
              ...props.style,
              height: handleSize === 'Size_24' ? '24px' : '32px',
              width: handleSize === 'Size_24' ? '24px' : '32px',
            }}
          />
        )}
      />
      <div className="slider-values">
        {subType === 'Range' ? `Range: ${values[0]} - ${values[1]}` : `Value: ${values[0]}`}
      </div>
    </div>
  );
};

export default Slider;
