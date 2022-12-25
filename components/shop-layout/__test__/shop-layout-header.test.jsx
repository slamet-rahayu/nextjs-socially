import { render, cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import Header from '../header';
import RProvider from '../../../redux-local/provider';
import { act } from 'react-test-renderer';

const MockHeader = () => {
  return (
    <RProvider>
      <Header />
    </RProvider>
  )
}

describe('test header shop layout', () => {

  it('should render username', async () => {
    await act(async () => render(<MockHeader />))
    const valueRes = screen.getByText('mameriyadi6@gmail.com')
    await waitFor(() => {
      expect(valueRes).toBeInTheDocument()
    })
  })

})