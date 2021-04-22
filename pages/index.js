import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home({ events }) {
	return (
		<Layout>
			<h1>Upcoming events</h1>
			{events ? events.map((event) => <EventItem key={event.id} event={event} />) : <h3>There is no events</h3>}

			{events.length > 0 && (
				<Link href='/events'>
					<a className='btn-secondary'>View All Events</a>
				</Link>
			)}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/events`);
	const events = await res.json();
	return {
		revalidate: 1,
		props: {
			events: events.slice(0, 3),
		},
	};
}
