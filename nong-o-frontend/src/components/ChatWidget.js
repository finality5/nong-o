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

  const handleNewUserMessage = useCallback(async (newMessage) => {
    const oResponse = await sendMessage(newMessage);
    addResponseMessage(oResponse);
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
