import React, { ChangeEvent, useEffect, useState } from 'react';
import { ChevronLeft } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import ContainerModule from 'modules/container/screen/layout';
import { useRouter } from 'next/router';
import { useLogin } from 'modules/auth/hooks';
import { ILoginReq } from 'modules/auth/interface/login';
import { Input, Header, Loader } from 'components';
import cx from 'classnames';
import { useValidateInput } from 'hooks';
import { emailRegex, passwordRegex } from 'utils/constant';
import { useSelector } from 'react-redux';

const validInput = {
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

export default function LoginScreen(): React.ReactElement {
  const router = useRouter();
  const [form, setForm] = useState<ILoginReq>({
    identifier: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState<string>('');

  const { inputChange, invalidMsg } = useValidateInput(validInput);

  const { isLoading, loginFailed, loginRes, dispatchLogin, clearLoginState } = useLogin();

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputChange(event);
    const {
      target: { name, value }
    } = event;
    if (errorMsg) {
      clearLoginState();
      setErrorMsg('');
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (loginFailed?.error?.message) {
      setErrorMsg(loginFailed?.error?.message);
    }
  }, [loginFailed]);

  useEffect(() => {
    if (loginRes?.jwt) {
      // router.replace('/');
    }
  }, [loginRes, router]);

  const onLogin = () => {
    dispatchLogin({ identifier: form.identifier, password: form.password });
  };

  return (
    <ContainerModule withBottomTab={false}>
      <Header
        leftComponent={
          <IconButton onClick={() => router.replace('/')}>
            <ChevronLeft />
          </IconButton>
        }
      />
      <div className="px-6 py-4">
        <div className="mt-12">
          <p className="text-lg font-semibold">Sign In</p>
          <p>Enter your credentials</p>
        </div>
        <div className="mt-20">
          <div className="mb-6">
            <p className="mb-2 font-semibold text-sm">Email</p>
            <Input
              type="email"
              name="identifier"
              onChange={onInputChange}
              placeholder="susu@moo.com"
              invalidMsg={invalidMsg?.identifier || errorMsg}
            />
          </div>
          <div className="mb-3">
            <p className="mb-2 font-semibold text-sm">Password</p>
            <Input
              type="password"
              name="password"
              onChange={onInputChange}
              placeholder="Something secret"
              invalidMsg={invalidMsg?.password}
            />
          </div>
          <button type="button" className="text-[#1C6758] text-xs float-right">
            Forgot Password?
          </button>
        </div>
        <div className="fixed w-full flex justify-center px-6 left-0 bottom-12">
          <div className="max-w-md w-full">
            <button
              type="button"
              disabled={isLoading}
              className={cx(
                'w-full',
                'rounded-xl',
                isLoading ? 'bg-gray-400' : 'bg-[#1C6758]',
                'flex',
                'justify-center',
                'items-center',
                'h-12'
              )}
              onClick={onLogin}
            >
              {isLoading ? (
                <Loader />
              ) : (
                <p className="font-semibold text-center text-white">Login</p>
              )}
            </button>
            <div className="flex font-semibold text-sm mt-3 justify-center">
              <p className="mr-1">Do not have an Account?</p>
              <button type="button" className="text-[#1C6758]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContainerModule>
  );
}
