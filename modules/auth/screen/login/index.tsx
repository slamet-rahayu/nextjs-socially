import React from 'react';
import { ChevronLeft } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Header from 'components/header';
import ContainerModule from 'modules/container/screen/layout';
import { useRouter } from 'next/router';
import { useLogin } from 'modules/auth/hooks';

export default function LoginScreen(): React.ReactElement {
  const router = useRouter();
  const { isLoading, isError, loginResponse, dispatchLogin } = useLogin();
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
            <p className="mb-2 font-semibold text-sm">Username or email</p>
            <input
              type="text"
              placeholder="susu@moo.com"
              className="bg-gray-50 w-full p-3 rounded-xl outline-[#006175] border-2"
            />
          </div>
          <div className="mb-3">
            <p className="mb-2 font-semibold text-sm">Password</p>
            <input
              type="password"
              placeholder="Something secret"
              className="bg-gray-50 w-full p-3 rounded-xl outline-[#006175] border-2"
            />
          </div>
          <button type="button" className="text-[#1C6758] text-xs float-right">
            Forgot Password?
          </button>
        </div>
        <div className="fixed w-full flex justify-center px-6 left-0 bottom-12">
          <div className="max-w-md w-full px-4">
            <button type="button" className="w-full py-3 rounded-xl bg-[#1C6758]">
              <p className="font-semibold text-center text-white">Login</p>
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
