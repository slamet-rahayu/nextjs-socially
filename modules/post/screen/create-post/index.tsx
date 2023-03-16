/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
// import Header from 'components/header';
import cx from 'classnames';
import { Add } from '@mui/icons-material';
// import { IconButton } from '@mui/material';
import { ContainerModule } from 'modules/container/screen';

export default function CreatePostComponent(): React.ReactElement {
  return (
    <ContainerModule>
      <div className="py-4 my-3">
        <p className="text-center font-bold">Post</p>
      </div>
      <div className="p-4">
        <div className="mb-5">
          <p className="mb-2">Select Image(s)</p>
          <div className="border bg-gray-50 rounded-2xl h-[200px] flex p-2 cursor-pointer hover:bg-gray-100">
            <div className="border p-1 w-fit rounded-xl mx-auto self-center">
              <Add fontSize="large" />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-2">Add caption</p>
          <textarea
            className={cx(
              'resize-none',
              'h-[84px]',
              'border',
              'rounded-xl',
              'w-full',
              'bg-gray-50',
              'p-2',
              'pb-3',
              'outline-none',
              'text-sm',
              'mb-2'
            )}
          />
        </div>
        <button
          type="button"
          className={cx(
            'text-center',
            'w-full',
            'bg-[#1C6758]',
            'text-white',
            'font-semibold',
            'rounded-xl',
            'py-2'
          )}
        >
          Upload
        </button>
      </div>
    </ContainerModule>
  );
}
