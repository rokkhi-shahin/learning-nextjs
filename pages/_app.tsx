import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider as JotaiProvider } from 'jotai'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (

    <QueryClientProvider client={queryClient}>
        <JotaiProvider>
          <Component {...pageProps} />
        </JotaiProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}
