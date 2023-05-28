import { take, put, call, apply, delay, race } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { connect } from 'client/socket';
import { START_CHANNEL, STOP_CHANNEL } from '../home-constant';

function createSocketChannel(socket: any) {
  return eventChannel((emit) => {
    const resHandler = (event: any) => {
      emit(event.payload);
    };

    const errorHandler = (errorEvent: any) => {
      emit(new Error(errorEvent.reason));
    };
    socket.on('hello', resHandler);
    socket.on('error', errorHandler);
    const unsubscribe = () => {
      socket.off('hello', resHandler);
    };
    return unsubscribe;
  });
}

function* watchOnPings() {
  const socket: void = yield call(connect);
  const socketChannel: string = yield call(createSocketChannel, socket);
  while (true) {
    try {
      const payload: string = yield take(socketChannel);
      // yield put({ type: INCOMING_PONG_PAYLOAD, payload });
      console.log({ payload });
    } catch (err) {
      console.error('socket error:', err);
    }
  }
}

export function* startStopChannel() {
  while (true) {
    yield take(START_CHANNEL);
    yield race({
      task: call(watchOnPings),
      cancel: take(STOP_CHANNEL)
    });
  }
}
