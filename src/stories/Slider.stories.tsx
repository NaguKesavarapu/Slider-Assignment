import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Slider, { SliderProps } from '../components/Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['Continuous', 'Discrete'],
      },
    },
    subType: {
      control: {
        type: 'radio',
        options: ['Single', 'Range'],
      },
    },
    steps: {
      control: {
        type: 'number',
        max: 10,
      },
    },
    handleSize: {
      control: {
        type: 'radio',
        options: ['Size_24', 'Size_32'],
      },
    },
  },
} as Meta;

const Template: StoryFn<SliderProps> = (args: SliderProps) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'Continuous',
  subType: 'Single',
  handleSize: 'Size_24',
  onChange: (value: number | number[]) => console.log(value),
};
