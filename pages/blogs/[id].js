import HeadTag from '../../components/HeadTag';

export const getStaticPaths = async () => {
	const res = await fetch(
		'http://jsonplaceholder.typicode.com/posts'
	);
	const data = await res.json();
	const paths = data.map((blog) => {
		return { params: { id: blog.id.toString() } };
	});
	return {
		paths,
		fallback: false,
	};
};
export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(
		`http://jsonplaceholder.typicode.com/posts/${id}`
	);
	const data = await res.json();

	return {
		props: {
			blog: data,
		},
	};
};

const BlogPost = ({ blog }) => {
	return (
		<>
			<HeadTag title={`Blog ${blog.id}`} />

			<div>
				<h1>{blog.title}</h1>
				<p>{blog.body}</p>
			</div>
		</>
	);
};

export default BlogPost;
