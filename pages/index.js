import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import Head from 'next/head';

function HomePage({ events }) {
  return (
    <div>
      <Head>
        <title>NextJS events</title>
        <meta name='description' content='find a lot of grate events that you allow evolve...' />
      </Head>
      <EventList items={events} />
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;
