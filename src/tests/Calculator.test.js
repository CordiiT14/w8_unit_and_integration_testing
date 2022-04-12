import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add two numbers', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const add = container.find('#operator_add');
    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    add.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract two numbers', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const subtract = container.find('#operator-subtract');
    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subtract.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply two numbers', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiply = container.find('#operator-multiply');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divid two numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divide = container.find('#operator-divide');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple button clicks to one number', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    expect(runningTotal.text()).toEqual('217')
  })

  it('should chain multiple operators together', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button5 = container.find('#number5');
    const add = container.find('#operator_add');
    const subtract = container.find('#operator-subtract');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    subtract.simulate('click');
    button1.simulate('click');
    add.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('6');
    
  })


})


