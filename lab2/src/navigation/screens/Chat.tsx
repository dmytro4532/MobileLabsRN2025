import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { darkTheme } from '../../theme/theme';
import { ChatItem } from '../../components/ChatItem';
import { useTheme } from '../../theme/ThemeProvider';

const chats = [
  {
    id: '1',
    name: 'Mark Dyson',
    message: "I'm already starting to play",
    date: '14 Jun',
    unread: 1,
    avatar: 'https://i.pravatar.cc/40?img=1',
    online: true,
  },
  {
    id: '2',
    name: 'Mark Dyson',
    message: 'You: Ok',
    date: '14 Jun',
    unread: 0,
    avatar: 'https://i.pravatar.cc/40?img=1',
    online: false,
  },
  {
    id: '3',
    name: 'Player123',
    message: 'You: Ok',
    date: '14 Jun',
    unread: 0,
    avatar: 'https://i.pravatar.cc/40?img=2',
    online: false,
  },
  {
    id: '4',
    name: 'Player123',
    message: 'You: Ok',
    date: '14 Jun',
    unread: 0,
    avatar: 'https://i.pravatar.cc/40?img=2',
    online: false,
  },
  {
    id: '5',
    name: 'Player',
    message: 'Hello!',
    date: '12 Jun',
    unread: 0,
    avatar: null,
    online: false,
  },
  {
    id: '6',
    name: 'Player',
    message: 'Hello!',
    date: '12 Jun',
    unread: 0,
    avatar: null,
    online: false,
  },
  {
    id: '7',
    name: 'Σχρêssø',
    message: 'Ok',
    date: '',
    unread: 0,
    avatar: 'https://i.pravatar.cc/40?img=3',
    online: true,
  },
  {
    id: '8',
    name: 'Σχρêssø',
    message: 'Ok',
    date: '',
    unread: 0,
    avatar: 'https://i.pravatar.cc/40?img=3',
    online: true,
  },
];

export const Chat = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Tabs>
          <Tab active>
            <TabText>Open chats</TabText>
          </Tab>
          <Tab>
            <TabText>My friends</TabText>
          </Tab>
        </Tabs>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ChatItem {...item} />}
          contentContainerStyle={{ padding: 16 }}
        />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.View`
      flex: 1;
      background-color: ${({ theme }) => theme.background};
      `;

const Tabs = styled.View`
      flex-direction: row;
      justify-content: space-around;
      padding: 16px;
      background-color: ${({ theme }) => theme.cardBackground};
      `;

const Tab = styled(TouchableOpacity) <{ active?: boolean }>`
        padding: 8px 16px;
        border-radius: 16px;
        background-color: ${({ active, theme }) => (active ? theme.primary : theme.cardBackground)};
        `;

const TabText = styled.Text`
        color: ${({ theme }) => theme.text};
        font-size: 14px;
        `;