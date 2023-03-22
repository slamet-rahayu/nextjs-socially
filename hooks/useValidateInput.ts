import { ChangeEvent, useState } from 'react';

interface IInvalidMsg {
  required?: string;
  minLength?: string;
  maxLength?: string;
  pattern?: string;
}

interface IInputValid {
  rules?: {
    required?: boolean;
    minLength?: number | undefined;
    maxLength?: number | undefined;
    pattern?: RegExp | undefined;
  };
  invalidMsg?: IInvalidMsg;
}

type TInputValid = Record<string, IInputValid>;

type RChangeEvent = ChangeEvent<HTMLInputElement>;

interface RValidateInput {
  invalidMsg: Record<string, string>;
  inputChange: (event: RChangeEvent) => void;
  allowChange: (event: RChangeEvent) => boolean;
}

export default function useValidateInput(validInput: TInputValid): RValidateInput {
  const [invalidMsg, setInvalidMsg] = useState<Record<string, string>>({});

  function validateInput(event: RChangeEvent): Record<string, string> | null {
    const {
      target: { name, value }
    } = event;

    const required = validInput[name].rules?.required || false;
    const minLength = validInput[name]?.rules?.minLength || 0;

    if (required && !value) {
      return { [name]: validInput[name]?.invalidMsg?.required || `Field is required` };
    }

    if (validInput[name]?.rules?.minLength && value.length < minLength) {
      return {
        [name]: validInput[name]?.invalidMsg?.minLength || `Minimum is ${minLength} character`
      };
    }

    if (validInput[name]?.rules?.pattern && !validInput[name]?.rules?.pattern?.test(value)) {
      return { [name]: validInput[name]?.invalidMsg?.pattern || `Invalid Pattern` };
    }
    return null;
  }

  function allowChange(event: RChangeEvent): boolean {
    const {
      target: { name, value }
    } = event;

    const maxLength = validInput[name]?.rules?.maxLength || 300;

    if (validInput[name]?.rules?.maxLength && maxLength < value.length) {
      return false;
    }

    return true;
  }

  function inputChange(event: RChangeEvent): void {
    const isErrorInput = validateInput(event);
    const {
      target: { name }
    } = event;

    if (isErrorInput) {
      setInvalidMsg((prev) => ({
        ...prev,
        ...isErrorInput
      }));
    } else {
      const newObj = { ...invalidMsg };
      delete newObj[name];
      setInvalidMsg(newObj);
    }
  }

  return { invalidMsg, allowChange, inputChange };
}
