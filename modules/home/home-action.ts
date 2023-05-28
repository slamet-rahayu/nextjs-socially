import { createAction } from '@reduxjs/toolkit';
import { START_CHANNEL, STOP_CHANNEL } from './home-constant';

export const startChannel = createAction(START_CHANNEL);
export const stopChannel = createAction(STOP_CHANNEL);
