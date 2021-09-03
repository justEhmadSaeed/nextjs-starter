import Link from 'next/link';
const Navbar = () => {
	return (
		<nav>
			<h1 className='logo'>Ehmad's Blog</h1>

			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<Link href='/blogs'>
				<a>Blogs</a>
			</Link>
		</nav>
	);
};

export default Navbar;
