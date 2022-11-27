import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider as JotaiProvider } from 'jotai'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (

    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <JotaiProvider>
          <Component {...pageProps} />
        </JotaiProvider>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  )
}
