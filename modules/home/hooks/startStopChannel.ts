import { useDispatch } from 'react-redux';
import { startChannel } from '../home-action';

export default function useStartStopChannel() {
  const dispatch = useDispatch();

  const dispatchStartChannel = () => dispatch(startChannel());
  const dispatchStopChannel = () => dispatch(startChannel());

  return {
    dispatchStartChannel,
    dispatchStopChannel
  };
}
