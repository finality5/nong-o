import React, {
  memo,
  useEffect,
  useCallback,
} from 'react';

import { Widget, addResponseMessage } from 'react-chat-widget';

import { sendMessage } from 'api';

import 'react-chat-widget/lib/styles.css';
import 'styles/index.css';
import logo from './jtbb.jpg'

const utterance = new SpeechSynthesisUtterance();
utterance.lang = 'th-TH';
utterance.rate = 1.0;

const ChatWidget = memo(() => {
  const textToSpeech = useCallback((message) => {
    speechSynthesis.cancel();
    utterance.text = message;
    speechSynthesis.speak(utterance);
  }, []);

  useEffect(() => {
    const welcomeText = 'อิรัชชัยมาเสะ!'
    addResponseMessage(welcomeText);
  }, []);

  const handleNewUserMessage = useCallback(async (newMessage) => {
    const oMessage = await sendMessage(newMessage);
    addResponseMessage(oMessage);
    textToSpeech(oMessage);
  }, []);

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="น้องโอ"
      subtitle="ทพจร"
      
      profileAvatar={logo}
    />
  );
});

export default ChatWidget;
