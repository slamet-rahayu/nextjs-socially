/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="@welldone-software/why-did-you-render" />
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, {
      trackAllPureComponents: true
    });
  }
}
