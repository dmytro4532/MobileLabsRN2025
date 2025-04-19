import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { darkTheme } from '../../theme/theme';

export const Profile = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <AvatarContainer>
          <Avatar source={{ uri: 'https://i.pravatar.cc/40?img=3' }} />
          <OnlineIndicator />
        </AvatarContainer>
        <Name>Дмитро Герасимчук</Name>
        <Group>ІПЗ-21-2</Group>
        <Options>
          <Option>
            <OptionText>Change Theme</OptionText>
            <Arrow>{'>'}</Arrow>
          </Option>
          <Option>
            <OptionText>Logout</OptionText>
            <Arrow>{'>'}</Arrow>
          </Option>
        </Options>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 32px 16px;
`;

const AvatarContainer = styled.View`
  position: relative;
  margin-bottom: 16px;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const OnlineIndicator = styled.View`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  background-color: #4caf50;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.background};
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 4px;
`;

const Group = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 32px;
`;

const Options = styled.View`
  width: 100%;
`;

const Option = styled(TouchableOpacity)`
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