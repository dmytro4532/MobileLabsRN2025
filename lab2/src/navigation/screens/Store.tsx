import { GameCard } from '../../components/GameCard';
import { FlatList, ScrollView, Text, TouchableOpacity } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { darkTheme } from '../../theme/theme';
import { useTheme } from '../../theme/ThemeProvider';

const games = [
  {
    id: '1',
    title: 'Grand Theft Auto V',
    platform: 'Windows',
    price: '$10',
    discount: '$20',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png',
  },
  {
    id: '2',
    title: 'Battlefield 4',
    platform: 'Windows',
    price: '$35',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/75/Battlefield_4_cover_art.jpg',
  },
  {
    id: '3',
    title: 'Factorio',
    platform: 'Windows, mac',
    price: '$7',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/08/Factorio_cover.png',
  },
  {
    id: '4',
    title: 'Horizon Zero Dawn',
    platform: 'Windows',
    price: '$38',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Horizon_Zero_Dawn.jpg/250px-Horizon_Zero_Dawn.jpg',
  },
];

export const Store = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ScrollView>
          <FeaturedGame>
            <FeaturedImage source={require('../../assets/Dead_by_Daylight.jpg')} />
            <FeaturedInfo>
              <FeaturedTitle>Dead by Daylight</FeaturedTitle>
              <FeaturedSubtitle>Recommended by your friend, Player</FeaturedSubtitle>
              <FeaturedPrice>
                <Discount>-70%</Discount><OldPrice>$18</OldPrice><NewPrice>$5</NewPrice>
              </FeaturedPrice>
            </FeaturedInfo>
          </FeaturedGame>
          <Tabs>
            <Tab active><TabText>Top Sellers</TabText></Tab>
            <Tab><TabText>Free to play</TabText></Tab>
            <Tab><TabText>Early Access</TabText></Tab>
          </Tabs>
          <FlatList
            data={games}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <GameCard {...item} />}
            contentContainerStyle={{ padding: 16 }}
          />
        </ScrollView>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const FeaturedGame = styled.View`
  flex-direction: row;
  padding: 16px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  margin: 16px;
`;

const FeaturedImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 8px;
`;

const FeaturedInfo = styled.View`
  flex: 1;
  margin-left: 16px;
`;

const FeaturedTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const FeaturedSubtitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
  margin-top: 4px;
`;

const FeaturedPrice = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const Discount = styled.Text`
  font-size: 14px;
  color: #4caf50;
  font-weight: bold;
`;

const OldPrice = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
  text-decoration-line: line-through;
  margin-left: 8px;
`;

const NewPrice = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  margin-left: 8px;
`;

const Tabs = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 16px;
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