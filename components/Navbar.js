import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<Image src='/logo.png' width={100} height={100} />
				<h1>Ehmad&apos;s Blog</h1>
			</div>
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
