import Main from './pages/Main'
import { Events } from './components';
import Page from './pages/home'
const App = () => {
  return (
    <main className="app transition-all ease-in">
        <Page />
        <Main/>
        <Events/>
    </main>
  );
};

export default App
