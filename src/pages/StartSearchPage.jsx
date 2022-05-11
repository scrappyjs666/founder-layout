import { StartSearching } from '@components/StartSearching/StartSearching';
import { Header } from '@components/Header/Header';
import { Main } from '@components/Main/Main';

export const StartSearchingPage = () => {
  return (
    <>
      <Header />
      <Main>
        <StartSearching />
      </Main>
    </>
  );
};
