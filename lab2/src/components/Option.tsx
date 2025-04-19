import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type OptionProps = {
  text: string;
  onPress?: () => void;
};

export const Option = ({ text, onPress }: OptionProps) => (
  <OptionContainer onPress={onPress}>
    <OptionText>{text}</OptionText>
    <Arrow>{'>'}</Arrow>
  </OptionContainer>
);

const OptionContainer = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  margin-bottom: 8px;
`;

const OptionText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

const Arrow = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.secondary};
`;