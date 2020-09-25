/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { converTime } from '../global/constant/constant';

import Navigator from '../routes/index'

const App = () => {

  useEffect(() => {
    converTime()
  }, [])

  return (
    <>
      <Navigator />
    </>
  );
};

export default App;
