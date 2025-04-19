import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { CommunityPost } from '../../components/CommunityPost';
import { darkTheme } from '../../theme/theme';
import { useTheme } from '../../theme/ThemeProvider';

const posts = [
  {
    id: '1',
    author: 'Eurogamer',
    time: 'yesterday • 2:20 pm',
    title: 'Florida tourist attraction sues Fortnite, seeks removal of in-game castle',
    description:
      'Coral Castle Museum, a tourist attraction near Miami, is suing Fortnite maker Epic Games for trademark infringement and unfair competition.',
    image: 'https://upload.wikimedia.org/wikipedia/uk/5/51/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_5_%D0%B3%D0%BB%D0%B0%D0%B2%D0%B8_Fortnite.jpg',
    likes: 324,
    comments: 12,
  },
  {
    id: '2',
    author: 'GameSpot',
    time: '2 days ago • 5:45 pm',
    title: 'Elden Ring DLC announced, bringing new challenges and lore',
    description:
      'FromSoftware has officially announced the first major DLC for Elden Ring, promising new areas, bosses, and an expansion of the game’s rich lore.',
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg',
    likes: 512,
    comments: 45,
  },
];

export const Community = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <HeaderTitle>Community</HeaderTitle>
          <HeaderSubtitle>Community and official content for all games and software</HeaderSubtitle>
          <Tabs>
            <Tab active>
              <TabText>All</TabText>
            </Tab>
            <Tab>
              <TabText>Screenshots</TabText>
            </Tab>
            <Tab>
              <TabText>Artwork</TabText>
            </Tab>
            <Tab>
              <TabText>Workshop</TabText>
            </Tab>
          </Tabs>
        </Header>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CommunityPost {...item} />}
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

const Header = styled.View`
      padding: 16px;
      background-color: ${({ theme }) => theme.cardBackground};
      `;

const HeaderTitle = styled.Text`
      font-size: 24px;
      font-weight: bold;
      color: ${({ theme }) => theme.text};
      `;

const HeaderSubtitle = styled.Text`
      font-size: 14px;
      color: ${({ theme }) => theme.secondary};
      margin-top: 4px;
      `;

const Tabs = styled.View`
      flex-direction: row;
      margin-top: 16px;
      `;

const Tab = styled(TouchableOpacity) <{ active?: boolean }>`
        padding: 8px 16px;
        border-radius: 16px;
        background-color: ${({ active, theme }) => (active ? theme.primary : theme.cardBackground)};
        margin-right: 8px;
        `;

const TabText = styled.Text`
        color: ${({ theme }) => theme.text};
        font-size: 14px;
        `;