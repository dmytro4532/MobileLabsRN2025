import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { darkTheme } from '../../theme/theme';

export const Safety = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <Container>
      <Tabs>
        <Tab active>
          <TabText>Guard</TabText>
        </Tab>
        <Tab>
          <TabText>Confirmations</TabText>
        </Tab>
      </Tabs>
      <Content>
        <LoggedInText>Logged in as player</LoggedInText>
        <Code>N5KCV</Code>
        <ProgressBar />
        <Description>
          You’ll enter your code each time you enter your password to sign in to your Steam account.
        </Description>
        <Tip>
          Tip: If you don’t share your PC, you can select "Remember my password" when you sign in to the PC client to
          enter your password and authenticator code less often.
        </Tip>
        <Options>
          <Option>
            <OptionText>Remove Authenticator</OptionText>
            <Arrow>{'>'}</Arrow>
          </Option>
          <Option>
            <OptionText>My Recovery Code</OptionText>
            <Arrow>{'>'}</Arrow>
          </Option>
          <Option>
            <OptionText>Help</OptionText>
            <Arrow>{'>'}</Arrow>
          </Option>
        </Options>
      </Content>
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

const Tab = styled(TouchableOpacity)<{ active?: boolean }>`
  padding: 8px 16px;
  border-radius: 16px;
  background-color: ${({ active, theme }) => (active ? theme.primary : theme.cardBackground)};
`;

const TabText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 16px;
`;

const LoggedInText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 8px;
`;

const Code = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;
`;

const ProgressBar = styled.View`
  width: 80%;
  height: 4px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2px;
  margin-bottom: 16px;
`;

const Description = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 16px;
`;

const Tip = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.secondary};
  text-align: center;
  margin-bottom: 24px;
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