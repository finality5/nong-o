import React, { Component } from 'react'
import { ThemeProvider , 
  Avatar,
	TitleBar,
	TextInput,
	MessageList,
	Message,
	MessageText,
	AgentBar,
	Title,
	Subtitle,
	MessageGroup,
	MessageButtons,
	MessageButton,
	MessageTitle,
	MessageMedia,
	TextComposer,
	Row,
	Fill,
	Fit,
	IconButton,
	SendButton,
	EmojiIcon,
	CloseIcon,
	Column,
	RateGoodIcon,
	RateBadIcon,
  Bubble,} from '@livechat/ui-kit';
  
  

export class Chat extends Component {
  render() {
    return (
      <div style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
			}}>
        <ThemeProvider>
          <TitleBar
              rightIcons={[
                <IconButton key="close" >
                  <CloseIcon />
                </IconButton>,
              ]}
              title="Live Chat"
              
        />
            <AgentBar>
                <Avatar imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Royal_Flag_of_King_Rama_IX.svg/800px-Royal_Flag_of_King_Rama_IX.svg.png" />
                <Column>
                    <Title>{'nong-o'}</Title>
                    <Subtitle>{'112'}</Subtitle>
                </Column>
            </AgentBar>
        </ThemeProvider>
        
      </div>
    )
  }
}

export default Chat
