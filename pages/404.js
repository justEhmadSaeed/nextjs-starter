import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import HeadTag from '../components/HeadTag';

const NotFoundPage = () => {
	const router = useRouter();

	useEffect(() => {
		// Redirect the user after 3 seconds
		setTimeout(() => {
			router.push('/');
		}, 3000);
	}, [router]);
	return (
		<>
			<HeadTag title='404' />

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
		</>
	);
};

export default NotFoundPage;
