import emoji from "react-easy-emoji";

export const greetings = {
	name: "Shuja Akbar",
	title: "Hi all, I'm Shuja",
	description:
		"I'm passionate Backend Developer having an experience of web applications with Python, Django and Django REST Framework development",
	resumeLink:
		"https://raw.githubusercontent.com/shujaakbar2020/Resume/main/Shuja-Akbar-CV.pdf",
};

export const openSource = {
	githubUserName: "shujaakbar2020",
};

export const contact = {};

export const socialLinks = {
	// url: "https://1hanzla100.github.io/",
	linkedin: "https://www.linkedin.com/in/shuja-akbar/",
	github: "https://github.com/shujaakbar2020",
	instagram: "https://www.instagram.com/shujaakbar/",
	facebook: "https://web.facebook.com/shuja.akbar.92",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"BACKEND SOLUTION ARCHITECT WHO WANTS TO EXPLORE DIFFERENT TECH STACKS",
	data: [
		{
			title: "Backend Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},

				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		// {
		// 	title: "Blockchain",
		// 	lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
		// 	skills: [
		// 		emoji(
		// 			"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
		// 		),
		// 		emoji(
		// 			"⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
		// 		),
		// 		emoji(
		// 			"⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
		// 		),
		// 		emoji(
		// 			"⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"
		// 		),
		// 		emoji(
		// 			"⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
		// 		),
		// 	],
		// 	softwareSkills: [
		// 		{
		// 			skillName: "Ethereum",
		// 			fontAwesomeClassname: "logos:ethereum",
		// 		},
		// 		{
		// 			skillName: "Solidity",
		// 			fontAwesomeClassname: "logos:solidity",
		// 		},
		// 		{
		// 			skillName: "Web3js",
		// 			fontAwesomeClassname: "logos:web3js",
		// 		},
		// 		{
		// 			skillName: "Metamask",
		// 			fontAwesomeClassname: "logos:metamask-icon",
		// 		},
		// 		{
		// 			skillName: "Ganache",
		// 			fontAwesomeClassname: "logos:ganache-icon",
		// 		},
		// 	],
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "University of Bradford(London)",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "September 2015 - April 2019",
		desc: "Develop an Virtual Reality based mobile application.",
		grade: "2nd Class Honours",
		descBullets: [
			"This help the students to understand practicles.",
			"Students can learn and intact with expensive chemicals in Virtual Reality based app.",
		],
	},
];

export const experience = [
	{
		role: "Backend Solution Architect",
		company: "Freelance",
		companylogo: "/img/icons/common/freelancer.png",
		date: "Aug 2022 – Present",
		desc: "I am working as freelance Backend Solution Architect on multiple platforms. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Associate Software Engineer",
		company: "Edraak Systems",
		companylogo: "/img/icons/common/edraak-systems.png",
		date: "Jul 2021 – Aug 2022",
		desc: "I worked here as associate software engineer, I worked with backend and Infrasturcture management technologies with Python Django and Amazon Web Services as Cloud Infrastructure.",
	},
	{
		role: "Text Automation Engineer",
		company: "DevHood.io",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Dec 2020 - Feb 2021",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	}
	// {
	// 	role: "Backend Developer",
	// 	company: "Wapidu",
	// 	companylogo: "/img/icons/common/edraak-systems-1.png",
	// 	date: "Sept 2021",
	// 	desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	// },
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/1hanzla100/developer-portfolio",
		link: "https://developer-portfolio-1hanzla100.vercel.app/",
	},
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		github: "https://github.com/1hanzla100/Django-React-Marketplace",
	},
	{
		name: "Technota (Forum)",
		desc: "Get hands-on experience in technical skills with Technota",
		github: "https://github.com/1hanzla100/django-react-forum",
	},
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		github: "https://github.com/1hanzla100/Django-ecommerce",
	},
];

export const feedbacks = [
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Shuja Akbar",
	description:
		"A passionate Backend Solution Architect and Infrastructure Developer.",
	author: "Shuja Akbar",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	// url: "https://developer-portfolio-1hanzla100.vercel.app",
	keywords: [
		"Shuja",
		"Shuja Akbar",
		"@shujaakbar",
		"shujaakbar",
		"Portfolio",
		"Shuja Portfolio ",
		"Shuja Akbar Portfolio",
	],
}