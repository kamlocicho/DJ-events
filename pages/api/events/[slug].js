const { events } = require('./data.json');

export default (req, res) => {
	const slug = req.query.slug;
	const event = events.filter((e) => e.slug === slug);

	if (req.method === 'GET') {
		res.status(200).json(event);
	} else {
		res.setHeader('Allow', ['GET']);
		req.status(405).json({ message: `Method ${req.method} is not allowed` });
	}
};
