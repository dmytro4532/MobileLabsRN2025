import React from 'react';
import styled from 'styled-components/native';

type GameCardProps = {
  title: string;
  platform: string;
  price: string;
  discount?: string;
  image: string;
};

export const GameCard = ({ title, platform, price, discount, image }: GameCardProps) => (
  <Card>
    <GameImage source={{ uri: image }} />
    <GameInfo>
      <GameTitle>{title}</GameTitle>
      <GamePlatform>{platform}</GamePlatform>
      <GamePrice>
        {discount && <Discount>{discount}</Discount>}
        {price}
      </GamePrice>
    </GameInfo>
  </Card>
);

const Card = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const GameImage = styled.Image`
  width: 80px;
  height: 80px;
`;

const GameInfo = styled.View`
  flex: 1;
  padding: 8px;
`;

const GameTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const GamePlatform = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.secondary};
`;

const GamePrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-top: 4px;
`;

const Discount = styled.Text`
  font-size: 12px;
  color: #4caf50;
  margin-right: 8px;
  text-decoration-line: line-through;
`;