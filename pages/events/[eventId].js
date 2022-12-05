import { Fragment } from 'react';
import Comments from '../../components/input/comments';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/button';
import Head from 'next/head';

function EventDetailPage({ event, hasError }) {
  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Events not found!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    )
  }
  if (!event) {
    return (
      <div className='center'>
        <p>loading...</p>
      </div>
    );
  }
  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name='description' content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}
export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();
  const paths = allEvents.map(event => {
    return { params: { eventId: event.id } }
  })
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { eventId } = params;
  const event = await getEventById(eventId);
  if (!event) {
    return {
      props: {
        hasError: true
      }
    }
  }
  return {
    props: {
      event
    },
    revalidate: 30
  }
}
export default EventDetailPage;
