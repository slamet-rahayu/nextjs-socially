import React, { ChangeEvent, useEffect, useState } from 'react';
import { ChevronLeft } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import ContainerModule from 'modules/container/screen/layout';
import { useRouter } from 'next/router';
import { useLogin } from 'modules/auth/hooks';
import { ILoginReq } from 'modules/auth/interface/auth';
import { Input, Header, Button } from 'components';
import Link from 'next/link';
import { useValidateInput } from 'hooks';
import { emailRegex, passwordRegex } from 'utils/constant';

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
      router.replace('/');
    }
  }, [loginRes, router]);

  const onLogin = () => {
    dispatchLogin(form);
  };

  const notAllowSubmit = Object.keys(invalidMsg).length > 0;

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
            <Button isLoading={isLoading} onClick={onLogin} disabled={notAllowSubmit}>
              Login
            </Button>
            <div className="flex font-semibold text-sm mt-3 justify-center">
              <p className="mr-1">Do not have an Account?</p>
              <Link href="/sign-up" passHref>
                <p className="text-[#1C6758]">Sign Up</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ContainerModule>
  );
}
