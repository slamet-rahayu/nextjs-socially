/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import { useState, ReactElement, ChangeEvent, useEffect } from 'react';
// import Header from 'components/header';
import cx from 'classnames';
import { Add } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
// import { IconButton } from '@mui/material';
import { ContainerModule } from 'modules/container/screen';
import { useCreatePost } from 'modules/post/hooks';
import { Button } from 'components';
import { useRouter } from 'next/router';

export default function CreatePostComponent(): ReactElement {
  const [preview, setPreview] = useState<string>('');
  const [selectedfile, setSelectedFile] = useState<File>();
  const [caption, setCaption] = useState<string>('');

  const { isLoading, isError, createPostRes, clearCreatePost, dispatchCreatePost } =
    useCreatePost();

  const router = useRouter();

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const imgPreviewUrl = URL.createObjectURL(file);
      setPreview(imgPreviewUrl);
      setSelectedFile(file);
    } else {
      setPreview('');
      setSelectedFile(undefined);
    }
  };

  const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCaption(event.target.value);
  };

  const onCreatePost = () => {
    if (selectedfile) {
      dispatchCreatePost({ file: selectedfile, caption });
    }
  };

  useEffect(() => {
    clearCreatePost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (createPostRes) {
      router.replace('/');
    }
  }, [clearCreatePost, createPostRes, router]);

  return (
    <ContainerModule>
      <div className="py-4 my-3">
        <p className="text-center font-bold">Post</p>
      </div>
      <div className="p-4 pb-10">
        <div className="mb-5">
          <p className="mb-2 text-sm font-semibold">Select Image(s)</p>
          <label
            htmlFor="post-file"
            className={cx(
              'border',
              'bg-gray-50',
              'rounded-2xl',
              'min-h-[200px]',
              'flex',
              'justify-center',
              'p-2',
              'cursor-pointer',
              'hover:bg-gray-100',
              'relative',
              'group'
            )}
          >
            <div
              className={cx(
                'border',
                'p-1',
                'w-fit',
                'rounded-xl',
                'mx-auto',
                'self-center',
                'bg-white',
                'absolute',
                'hidden',
                'group-hover:block'
              )}
            >
              {preview ? <EditIcon fontSize="large" /> : <Add fontSize="large" />}
            </div>
            {preview && <img src={preview} alt="preview" />}
            <input
              onChange={onFileChange}
              type="file"
              accept="image/*"
              className="hidden"
              id="post-file"
            />
          </label>
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Add caption</p>
          <textarea
            onChange={onInputChange}
            value={caption}
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
              'text-xs',
              'mb-2'
            )}
          />
        </div>
        <Button isLoading={isLoading} onClick={onCreatePost}>
          Post
        </Button>
      </div>
    </ContainerModule>
  );
}
