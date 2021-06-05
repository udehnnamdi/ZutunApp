import NewZutun from './components/NewZutun';
import Zutuns from './components/Zutuns';
import ZutunsContextProvider from './store/zutuns-context';

function App() {
  return (
    <ZutunsContextProvider>
      <NewZutun />
      <Zutuns />
    </ZutunsContextProvider>
  );
}

export default App;