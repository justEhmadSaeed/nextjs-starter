import Link from 'next/link';
const NotFoundPage = () => {
	return (
		<div className='not-found'>
			<h1>Page Not Found!</h1>
			<h2>This page does not exist.</h2>
			<p>
				Go back to the{' '}
				<Link href='/'>
					<a>Home Page</a>
				</Link>
			</p>
		</div>
	);
};

export default NotFoundPage;
