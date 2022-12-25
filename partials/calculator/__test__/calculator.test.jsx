import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Calculator from '../index';
import '@testing-library/jest-dom/extend-expect';

describe('test calculator functioanlity', () => {

  let tree;
  
  beforeEach(() => {
    tree = render(<Calculator />)
  })

  afterEach(() => {
    cleanup()
  })

  const calculate = (value1, operator, value2) => {
    const btnOne = tree.getByRole('button', { name: value1 });
    const btnTwo = tree.getByRole('button', { name: value2 })
    const btnOp = tree.getByRole('button', { name: operator })
    const btnEqual = tree.getByRole('button', { name: '=' });
    fireEvent.click(btnOne)
    fireEvent.click(btnOp)
    fireEvent.click(btnTwo)
    fireEvent.click(btnEqual)
  }
  
  it('should change input value on button number click', () => {
    const btnOne = tree.getByText(/1/i)
    const valueRes = tree.getByRole('textbox')
    fireEvent.click(btnOne)
    expect(valueRes).toHaveValue('1')
  })

  it('should add two number on button equal click', () => {
    calculate('1', '+', '2')
    const valueRes = tree.getByRole('textbox');
    expect(valueRes).toHaveValue('3')
  })
  
  it('should subtract two number on button equal click', () => {
    calculate('4', '-', '2')
    const valueRes = tree.getByRole('textbox');
    expect(valueRes).toHaveValue('2')
  })
  
  it('should multiply two number on button equal click', () => {
    calculate('4', 'X', '2')
    const valueRes = tree.getByRole('textbox');
    expect(valueRes).toHaveValue('8')
  })
  
  it('should divide two number on button equal click', () => {
    calculate('4', '÷', '2')
    const valueRes = tree.getByRole('textbox');
    expect(valueRes).toHaveValue('2')
  })
  
  it('should clear input on button clear click', () => {
    calculate('1', '+', '1')
    const btnClear = tree.getByRole('button', { name: /c/i })
    fireEvent.click(btnClear)
    const valueRes = tree.getByRole('textbox');
    expect(valueRes).toHaveValue('0')
  })

})