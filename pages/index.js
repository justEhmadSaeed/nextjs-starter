import styles from '../styles/Home.module.css';
import Link from 'next/link';
import HeadTag from '../components/HeadTag';

export default function Home() {
	return (
		<>
			<HeadTag title='Home' />

			<div>
				<h1 className={styles.title}>Home</h1>
				<p className={styles.text}>
					 An application programming interface is a connection between computers
                                         or between computer programs. It is a type of software interface,
                                         offering a service to other pieces of software. A document or standard
                                         that describes how to build or use such a connection or interface is
                                         called an API specification
				</p>
				<p className={styles.text}>
				In blogs section, here is an API which fetches data from Database.
                                Examples of APIs we use in our daily life are:
                                 <ui></ui>
                                <li> Pay with Paypal</li>
                                <li> Twitter bots</li>
                                <li> Travel booking</li>
				</p>
				<Link href='/blogs'>
					<a className={styles.btn}>See Blogs List</a>
				</Link>
			</div>
		</>
	);
}
