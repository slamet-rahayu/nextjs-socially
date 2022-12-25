import { Provider } from 'react-redux';
import { ReactNode, ReactElement } from 'react';
import store from '../store';

interface IProvider {
  children: ReactNode;
}

export default function RProvider({ children }: IProvider): ReactElement {
  return <Provider store={store}>{children}</Provider>;
}
