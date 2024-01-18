import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot } from 'recoil';
import MainRouter from './router/MainRouter';
import { globalStyle } from './styles/GlobalStyle';
import { theme } from './styles/Theme';

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
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        <RecoilRoot>
          <Toaster />
          <MainRouter />
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
