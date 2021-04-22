import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';
import Layout from '@/components/Layout';

export default function EventsPage({ events }) {
	return (
		<Layout>
			<h1>Upcoming events</h1>
			{events ? events.map((event) => <EventItem key={event.id} event={event} />) : <h3>There is no events</h3>}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/events`);
	const events = await res.json();
	return {
		props: {
			events,
		},
		revalidate: 1,
	};
}
