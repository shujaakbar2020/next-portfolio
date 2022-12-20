import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import { useRouter } from 'next/router';
import Script from 'next/script';
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-252525820-1" />
			{/* <!-- Google tag (gtag.js) --> */}
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-252525820-1"></script>
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments)}
				gtag('js', new Date());

				gtag('config', 'UA-252525820-1');
			</script>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
