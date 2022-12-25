import { ReactElement, useState } from 'react';
import styles from 'styles/calculator.module.scss';
import Button from './button';

function Calculator(): ReactElement {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [operator, setOperator] = useState<string>('');
  const [valueRes, setValueRes] = useState<number>(0);

  const setNumber = (num: number, op: string): void => {
    if (op) {
      setValue2(num);
    } else {
      setValue1(num);
    }
    setValueRes(num);
  };

  const calculate = (val1: number, val2: number, op: string): number => {
    switch (op) {
      case 'add':
        return val1 + val2;
      case 'subtract':
        return val1 - val2;
      case 'multiply':
        return val1 * val2;
      case 'divide':
        return val1 / val2;
      default:
        return 0;
    }
  };

  const buttonData = [
    {
      name: 'clear',
      value: 'C',
      className: styles.btn,
      onClick: () => {
        setValue1(0);
        setValue2(0);
        setOperator('');
        setValueRes(0);
      }
    },
    { name: 'braces', value: '()', className: styles.btn, onClick: () => {} },
    { name: 'percentile', value: '%', className: styles.btn, onClick: () => {} },
    { name: 'divide', value: '÷', className: styles.btn, onClick: () => {} },
    {
      name: 'one',
      value: 1,
      className: styles.btn,
      onClick: () => {
        setNumber(1, operator);
      }
    },
    {
      name: 'two',
      value: 2,
      className: styles.btn,
      onClick: () => {
        setNumber(2, operator);
      }
    },
    {
      name: 'three',
      value: 3,
      className: styles.btn,
      onClick: () => {
        setNumber(3, operator);
      }
    },
    {
      name: 'multiply',
      value: 'X',
      className: styles.btn,
      onClick: () => {
        setOperator('multiply');
      }
    },
    {
      name: 'four',
      value: 4,
      className: styles.btn,
      onClick: () => {
        setNumber(4, operator);
      }
    },
    {
      name: 'five',
      value: 5,
      className: styles.btn,
      onClick: () => {
        setNumber(5, operator);
      }
    },
    {
      name: 'six',
      value: 6,
      className: styles.btn,
      onClick: () => {
        setNumber(6, operator);
      }
    },
    {
      name: 'add',
      value: '+',
      className: styles.btn,
      onClick: () => {
        setOperator('add');
      }
    },
    {
      name: 'seven',
      value: 7,
      className: styles.btn,
      onClick: (): void => {
        setNumber(7, operator);
      }
    },
    {
      name: 'eight',
      value: 8,
      className: styles.btn,
      onClick: (): void => {
        setNumber(8, operator);
      }
    },
    {
      name: 'nine',
      value: 9,
      className: styles.btn,
      onClick: (): void => {
        setNumber(9, operator);
      }
    },
    { name: 'dot', value: '.', className: styles.btn, onClick: () => {} },
    {
      name: 'zero',
      value: 0,
      className: styles.btn,
      onClick: () => {
        setValue1(0);
      }
    },
    { name: 'triple-zero', value: '000', className: styles.btn, onClick: () => {} },
    {
      name: 'subtract',
      value: '-',
      className: styles.btn,
      onClick: () => {
        setOperator('subtract');
      }
    },
    {
      name: 'equal',
      value: '=',
      className: styles.btn,
      onClick: (): void => {
        if (operator && value2) {
          setValueRes(calculate(value1, value2, operator));
          setValue1(0);
          setValue2(0);
          setOperator('');
        }
      }
    }
  ];

  return (
    <div className={styles.ccontainer}>
      <div className={styles.content}>
        <input type="text" name="result" value={valueRes} className={styles.result} readOnly />
        <div className={styles.btn_container}>
          {buttonData.map((v) => (
            <Button key={v.name} onClick={v.onClick}>
              {v.value}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
