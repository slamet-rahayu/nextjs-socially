import { useState } from 'react';

interface IProductDetailPage {
  toggleDialog: () => void;
  isModalOpen: boolean;
}

export default function useProductDetailPage(): IProductDetailPage {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleDialog = () => setIsModalOpen((prev) => !prev);

  return {
    toggleDialog,
    isModalOpen
  };
}
