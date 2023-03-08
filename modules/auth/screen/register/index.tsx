import { useState, ChangeEvent } from 'react';
import ContainerModule from 'modules/container/screen/layout';
import Header from 'components/header';
import { IconButton } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Input from 'components/input';
import { useValidateInput } from 'hooks';
import { emailRegex, passwordRegex } from 'utils/constant';
import { useRegister } from 'modules/auth/hooks';
import { Button } from 'components';

const validInput = {
  username: {
    rules: {
      required: true
    },
    invalidMsg: {
      required: 'Username is required'
    }
  },
  identifier: {
    rules: {
      required: true,
      pattern: emailRegex
    },
    invalidMsg: {
      required: 'Email is required',
      pattern: 'Invalid email format'
    }
  },
  password: {
    rules: {
      required: true,
      pattern: passwordRegex
    },
    invalidMsg: {
      required: 'Password is required',
      pattern:
        'Password must be at least 8 character, contain at least one lowercase letter, uppercase letter, one digit, and special character.'
    }
  }
};

export default function RegisterScreen() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: '',
    identifier: '',
    password: ''
  });

  const { isLoading, registerFailed, registerRes, clearRegisterState, dispatchRegister } =
    useRegister();

  const { inputChange, invalidMsg } = useValidateInput(validInput);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;
    inputChange(event);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onBackClick = () => {
    router.replace('/');
  };

  const onRegister = () => {
    dispatchRegister(form);
  };

  const nowAllowSubmit = Object.keys(invalidMsg).length > 0;

  return (
    <ContainerModule withBottomTab={false}>
      <Header
        leftComponent={
          <IconButton onClick={onBackClick}>
            <ChevronLeft />
          </IconButton>
        }
      />
      <div className="p-4">
        <div className="mt-12">
          <p className="text-lg font-semibold">Sign Up</p>
        </div>
        <div className="mt-20">
          <div className="mb-6">
            <p className="mb-2 font-semibold text-sm">Username</p>
            <Input
              type="text"
              name="username"
              onChange={onInputChange}
              placeholder="your username"
              invalidMsg={invalidMsg?.username}
            />
          </div>
          <div className="mb-6">
            <p className="mb-2 font-semibold text-sm">Email</p>
            <Input
              type="email"
              name="identifier"
              onChange={onInputChange}
              placeholder="susu@moo.com"
              invalidMsg={invalidMsg?.identifier}
            />
          </div>
          <div className="mb-6">
            <p className="mb-2 font-semibold text-sm">Password</p>
            <Input
              type="password"
              name="password"
              onChange={onInputChange}
              placeholder="secret"
              invalidMsg={invalidMsg?.password}
            />
          </div>
        </div>
        <div className="fixed w-full flex justify-center px-6 left-0 bottom-12">
          <div className="max-w-md w-full">
            <Button isLoading={isLoading} onClick={onRegister} disabled={nowAllowSubmit}>
              Sign Up
            </Button>
            <div className="flex font-semibold text-sm mt-3 justify-center">
              <p className="mr-1">Already have an Account?</p>
              <button type="button" className="text-[#1C6758]">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContainerModule>
  );
}
