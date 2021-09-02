import Link from 'next/link';
const Navbar = () => {
	return (
		<div>
			<h1>Ehmad's Blog</h1>

			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<Link href='/blogs'>
				<a>Blogs</a>
			</Link>
		</div>
	);
};

export default Navbar;
