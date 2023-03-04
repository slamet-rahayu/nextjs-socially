import ContainerModule from 'modules/container/screen/layout';
import Header from 'components/header';
import { IconButton } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Input from 'components/input';
import { ChangeEvent } from 'react';

export default function RegisterScreen() {
  const router = useRouter();
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const onBackClick = () => {
    router.replace('/');
  };

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
            />
          </div>
          <div className="mb-6">
            <p className="mb-2 font-semibold text-sm">Email</p>
            <Input type="email" name="email" onChange={onInputChange} placeholder="susu@moo.com" />
          </div>
          <div className="mb-6">
            <p className="mb-2 font-semibold text-sm">Password</p>
            <Input type="password" name="password" onChange={onInputChange} placeholder="secret" />
          </div>
        </div>
        <div className="fixed w-full flex justify-center px-6 left-0 bottom-12">
          <div className="max-w-md w-full px-4">
            <button type="button" className="w-full py-3 rounded-xl bg-[#1C6758]">
              <p className="font-semibold text-center text-white">Sign Up</p>
            </button>
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
