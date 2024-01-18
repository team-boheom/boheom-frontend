import { BrowserRouter } from 'react-router-dom';
// import { globalStyle } from './styles/GlobalStyle';
// import { Global, ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import { theme } from './styles/Theme';
import { Toaster } from 'react-hot-toast';
import { Logo } from './assets';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000,
      refetchInterval: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ThemeProvider theme={theme}>
        <Global styles={globalStyle} /> */}
      <RecoilRoot>
        <Toaster />
        <BrowserRouter>
          <img src={Logo} />
          {/* <MainRouter /> */}
        </BrowserRouter>
      </RecoilRoot>
      {/* </ThemeProvider> */}
    </QueryClientProvider>
  );
}

export default App;
