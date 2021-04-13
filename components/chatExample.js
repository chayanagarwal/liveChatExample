import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const chatClient = StreamChat.getInstance('dz5f4d5kzrue');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoib2RkLXF1ZWVuLTEiLCJleHAiOjE2MTgzMjQzMzB9.QhobsRrHHRIM3Rstvq1MZ1sj-LNre9EpH5CGCjlhy74';

chatClient.connectUser(
  {
    id: 'odd-queen-1',
    name: 'odd',
    image: 'https://getstream.io/random_png/?id=odd-queen-1&name=odd',
  },
  userToken
);

const channel = chatClient.channel('messaging', 'odd-queen-1', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['odd-queen-1'],
});

const ChatExample = () => (
  <Chat client={chatClient} theme="messaging light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default ChatExample;
