import React, {
  memo,
} from 'react';

import Banner from 'components/Banner';

const Home = memo(() => {
  return (
    <div id="Home">
      <Banner />
    </div>
  );
});

export default Home;
