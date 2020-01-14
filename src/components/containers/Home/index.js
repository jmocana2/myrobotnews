import React from 'react';

import Header from '../../core/Header';
import New from '../../core/New';

import dataNew from '../../../utils/__mocks__/news';

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <New dataNew={dataNew} />
      </div>
    </div>
  );
};

export default Home;
