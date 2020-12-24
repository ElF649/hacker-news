import { React } from 'react';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import '../../vendor/normalize.css';
import '../../vendor/fonts.css';

export const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);
