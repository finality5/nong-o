import React, {
  memo,
} from 'react';

import Banner from 'components/Banner';
import ChatWidget from 'components/ChatWidget';

const Home = memo(() => {
  return (
    <div id="Home">
      <Banner />
      <ChatWidget />
    </div>
  );
});

export default Home;
