import Head from 'next/head';

const HeadTag = ({ title }) => {
	return (
		<Head>
			<title>Ehmad&apos;s Blog | {title}</title>
			<meta name='keywords' content='Ehmad' />
		</Head>
	);
};

export default HeadTag;
