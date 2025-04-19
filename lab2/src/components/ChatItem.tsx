import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const ChatItem = ({ name, message, date, unread, avatar, online }: any) => (
  <ChatContainer>
    <AvatarContainer>
      {avatar ? (
        <Avatar source={{ uri: avatar }} />
      ) : (
        <PlaceholderAvatar>
          <PlaceholderText>?</PlaceholderText>
        </PlaceholderAvatar>
      )}
      {online && <OnlineIndicator />}
    </AvatarContainer>
    <ChatInfo>
      <ChatHeader>
        <ChatName>{name}</ChatName>
        <ChatDate>{date}</ChatDate>
      </ChatHeader>
      <ChatMessage>{message}</ChatMessage>
    </ChatInfo>
    {unread > 0 && <UnreadBadge>{unread}</UnreadBadge>}
  </ChatContainer>
);

const ChatContainer = styled.View`
        flex-direction: row;
        align-items: center;
        margin-bottom: 16px;
        `;

const AvatarContainer = styled.View`
        position: relative;
        `;

const Avatar = styled.Image`
        width: 40px;
        height: 40px;
        border-radius: 20px;
        `;

const PlaceholderAvatar = styled.View`
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background-color: ${({ theme }) => theme.secondary};
        justify-content: center;
        align-items: center;
        `;

const PlaceholderText = styled.Text`
        color: ${({ theme }) => theme.text};
        font-size: 16px;
        font-weight: bold;
        `;

const OnlineIndicator = styled.View`
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        background-color: #4caf50;
        border-radius: 5px;
        border: 2px solid ${({ theme }) => theme.background};
        `;

const ChatInfo = styled.View`
        flex: 1;
        margin-left: 12px;
        `;

const ChatHeader = styled.View`
        flex-direction: row;
        justify-content: space-between;
        `;

const ChatName = styled.Text`
        font-size: 16px;
        font-weight: bold;
        color: ${({ theme }) => theme.text};
        `;

const ChatDate = styled.Text`
        font-size: 12px;
        color: ${({ theme }) => theme.secondary};
        `;

const ChatMessage = styled.Text`
        font-size: 14px;
        color: ${({ theme }) => theme.secondary};
        margin-top: 4px;
        `;

const UnreadBadge = styled.Text`
        background-color: #ff3b30;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        padding: 4px 8px;
        border-radius: 12px;
        overflow: hidden;
        `;