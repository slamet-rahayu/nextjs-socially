import ContainerModule from 'modules/container/screen/layout';
import React from 'react';

export default function LoginScreen(): React.ReactElement {
  return (
    <ContainerModule withBottomTab={false}>
      <div className="px-6 py-4">
        <div className="mt-20">
          <p className="text-lg font-semibold">Sign In</p>
          <p>Enter your credentials</p>
        </div>
        <div className="mt-20">
          <div className="mb-6">
            <p className="mb-2 font-semibold text-sm">Username or email</p>
            <input
              type="text"
              placeholder="susu@moo.com"
              className="bg-gray-50 w-full p-3 rounded-xl outline-none"
            />
          </div>
          <div className="mb-3">
            <p className="mb-2 font-semibold text-sm">Password</p>
            <input
              type="text"
              placeholder="susu@moo.com"
              className="bg-gray-50 w-full p-3 rounded-xl outline-none"
            />
          </div>
          <button type="button" className="text-[#1C6758] text-xs float-right">
            Forgot Password?
          </button>
        </div>
        <div className="fixed max-w-md w-full px-6 left-0 bottom-12">
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
    </ContainerModule>
  );
}
