import styles from '../../styles/Blogs.module.css';
import Link from 'next/link';
import HeadTag from '../../components/HeadTag';

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
			<HeadTag title='Blogs' />

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
