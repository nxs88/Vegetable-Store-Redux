import './App.scss';
import Header from './modules/Header/components/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import CardList from './modules/List/components/CardList';

function App() {
  return (
    <div className="container">
      <MantineProvider>
        <Header />
        <CardList />
      </MantineProvider>
    </div>
  );
}

export default App;
