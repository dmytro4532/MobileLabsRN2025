import React from 'react';
import styled from 'styled-components/native';

type CommunityPostProps = {
  author: string;
  time: string;
  title: string;
  description: string;
  image: string;
  likes: number;
  comments: number;
};

export const CommunityPost = ({ author, time, title, description, image, likes, comments }: CommunityPostProps) => (
  <Post>
    <PostHeader>
      <Author>{author}</Author>
      <Time>{time}</Time>
    </PostHeader>
    <PostImage source={{ uri: image }} />
    <PostTitle>{title}</PostTitle>
    <PostDescription>{description}</PostDescription>
    <PostFooter>
      <FooterItem>
        <FooterIcon source={require('../assets/like.png')} />
        <FooterText>{likes}</FooterText>
      </FooterItem>
      <FooterItem>
        <FooterIcon source={require('../assets/comment.png')} />
        <FooterText>{comments}</FooterText>
      </FooterItem>
    </PostFooter>
  </Post>
);

const Post = styled.View`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
`;

const PostHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Author = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const Time = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.secondary};
`;

const PostImage = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const PostTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 4px;
`;

const PostDescription = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 8px;
`;

const PostFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const FooterItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

const FooterIcon = styled.Image`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const FooterText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;