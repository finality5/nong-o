import React, {
  memo,
  useEffect,
  useCallback,
} from 'react';

import { Widget, addResponseMessage } from 'react-chat-widget';

import { sendMessage } from 'api';

import 'react-chat-widget/lib/styles.css';
import 'styles/index.css';

const ChatWidget = memo(() => {
  useEffect(() => {
    addResponseMessage('อิรัชชัยมาเสะ!');
  }, []);

  const handleNewUserMessage = useCallback((newMessage) => {
    // Now send the message throught the backend API
    console.log('newMessage:', newMessage);
    sendMessage(newMessage);
  }, []);

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="น้องโอ"
      subtitle="ทพจร"
    />
  );
});

export default ChatWidget;
