import type { NextPage } from 'next';
import Head from 'next/head';
import PageCover from '../components/PageCover';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import LetterCard from '../components/LetterCard';
import GameList from '../components/GameList';
import SearchBox from '../components/SearchBox';
import SortDropDown from '../components/SortDropDown';
import { useAppSelector } from '../redux/hooks';
import { selectGames, selectFilteredGames } from '../redux/features/gamesSlice';

const Home: NextPage = () => {
  const { letters } = useAppSelector(selectGames);
  const { items } = useAppSelector(selectFilteredGames);
  return (
    <div>
      <Head>
        <title>Kafein Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageCover
        title="Lorem ipsum dolor sit amet consectetur"
        description="With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!"
      >
        <SearchBox />
      </PageCover>
      <PageHeader title="Browse Games">
        <SortDropDown />
      </PageHeader>
      <Container flex>
        <Sidebar />
        <Container grow>
          {letters.map((letter, idx) => {
            const games = items.filter(item => item.name.toLocaleLowerCase()[0] === letter);
            return !!games.length && (
              <LetterCard key={`letter-${idx}`} letter={letter}>
                <GameList items={games}/>
              </LetterCard>
            );
          })}
        </Container>
      </Container>
    </div>
  )
}

export default Home;
