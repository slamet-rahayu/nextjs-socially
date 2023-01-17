/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import cx from 'classnames';
import { Dialog, IconButton } from '@mui/material';

export default function CreatePostComponent(): React.ReactElement {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => setModalOpen((prev) => !prev);

  return (
    <>
      <div className="mb-6 p-4 bg-gray-100 rounded-2xl">
        <button
          type="button"
          onClick={toggleModal}
          className={cx(
            'border-2',
            'border-gray-300',
            'rounded-3xl',
            'w-full',
            'flex',
            'items-center',
            'px-2',
            'py-3'
          )}
        >
          <AddCircleIcon color="secondary" className="mr-2" />
          <p className="text-left font-semibold">Create a post</p>
        </button>
      </div>
      <Dialog open={modalOpen} onClose={toggleModal} fullWidth>
        <div className="p-3 rounded">
          <p className="font-semibold mb-2">Share Something great</p>
          <textarea
            autoFocus
            className={cx('outline-none', 'border-2', 'rounded', 'p-2', 'text-black', 'w-full')}
          />
        </div>
      </Dialog>
    </>
  );
}
