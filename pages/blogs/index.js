import Head from 'next/head';
import styles from '../../styles/Blogs.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
	const res = await fetch(
		'http://jsonplaceholder.typicode.com/posts'
	);
	const data = await res.json();

	return {
		props: {
			blogsData: data,
		},
	};
};

const blogs = ({ blogsData }) => {
	return (
		<>
			<Head>
				<title>Ehmad's Blog | Blogs</title>
				<meta name='keywords' content='Ehmad' />
			</Head>
			<div>
				<h1>Blogs List</h1>
				{blogsData.map((blog) => (
					<Link href={`/blogs/${blog.id}`} key={blog.id}>
						<a className={styles.single}>
							<h3>{blog.title}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	);
};

export default blogs;
