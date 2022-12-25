import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import Button from '../button';
import '@testing-library/jest-dom/extend-expect';

describe('test button component', () => {

  afterEach(cleanup)

  it('should render props correctly', () => {
    render(<Button>Hello</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Hello')
  });
  
  
});

describe('test button variant', () => {

  afterEach(cleanup)

  it('should have class primary if variant is primary', () => {
    render(<Button variant='primary'>Hello</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn_primary')
  });
  
  it('should have class primary if variant is empty', () => {
    render(<Button variant=''>Hello</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn_primary')
  });
  
  it('should have class secondary if variant is secondary', () => {
    render(<Button variant='secondary'>Hello</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn_secondary')
  });
  
  it('should have class danger if variant is danger', () => {
    render(<Button variant='danger'>Hello</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn_danger')
  });
  
  it('should have class success if variant is success', () => {
    render(<Button variant='success'>Hello</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn_success')
  });
  
  it('should have class warning if variant is warning', () => {
    render(<Button variant='warning'>Hello</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn_warning')
  });
  
})
