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
	url: "https://shujaakbar.com/",
	linkedin: "https://www.linkedin.com/in/shuja-akbar/",
	github: "https://github.com/shujaakbar2020",
	instagram: "https://www.instagram.com/shujaakbar/",
	facebook: "https://web.facebook.com/shuja.akbar.92",
	hackerrank: "https://www.hackerrank.com/shujaakbar2020",
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
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
				emoji(
					"⚡ Having extensive experience in RestAPIs development."
				),
				emoji("⚡ Strong hand-coding ability with Python"),
				emoji("⚡ Experience in working with PostgreSQL, MySQL"),
				emoji("⚡ Proficient in working with Kubernetes (1 year, production-grade experience) and Docker"),
				emoji("⚡ Have working experience with AWS(EC2, S3, Autoscaling, IAM)"),
			],
			softwareSkills: [
				// {
				// 	skillName: "HTML-5",
				// 	fontAwesomeClassname: "vscode-icons:file-type-html",
				// },
				// {
				// 	skillName: "CSS-3",
				// 	fontAwesomeClassname: "vscode-icons:file-type-css",
				// },
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
				{
					skillName: "Flask",
					fontAwesomeClassname: "logos:flask",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Redis",
					fontAwesomeClassname: "logos:redis",
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
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Backend/Api",
		progressPercentage: "90",
	},
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Infrastructure as Code",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
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
	},
	{
		role: "Associate Software Engineer",
		company: "Edraak Systems",
		companylogo: "/img/icons/common/edraak-systems.png",
		date: "Jul 2021 – Aug 2022",
		desc: "I worked here as associate software engineer, I worked with backend and Infrasturcture management technologies with Python Django and Amazon Web Services as Cloud Infrastructure.",
	},
	{
		role: "Test Automation Engineer",
		company: "DevHood.io",
		companylogo: "/img/icons/common/dusecaSoftware.jpg",
		date: "Dec 2020 - Feb 2021",
		desc: "Develop and Automate different test case scenarios on Django based applications.",
	}
];

export const projects = [
	{
		name: "Ecommerce Backend",
		desc: "Ecommerce Backend as API built with Django REST framework using best practices, it supports all Frontend platforms.",
		github: "https://github.com/shujaakbar2020/drf-ecommerce",
	},
	{
		name: "Ecommerce Frontend",
		desc: "Responsive Ecommerce Frontend built with ReactJS and Bootstrap.",
		github: "https://github.com/shujaakbar2020/ecomfrontend",
		link: "https://shop-by-shuja.netlify.app/",
	},
	{
		name: "Django Portfolio",
		desc: "Software Developer Portfolio Template built with Django and Bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/shujaakbar2020/Portfolio",
		link: "https://shujaakbar.herokuapp.com",
	},
	{
		name: "NextJS Portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/shujaakbar2020/next-portfolio",
		link: "https://shujaakbar.netlify.app/",
	},
	{
		name: "Flask Sever Automation",
		desc: "Template to automate your flask server deployment with Docker and Jenkins on Kubernetes",
		github: "https://github.com/shujaakbar2020/flask-docker-jenkins-k8s",
	},
	{
		name: "Kubernetes Automation",
		desc: "Manage and automate your kubernetes setup with Django",
		github: "https://github.com/shujaakbar2020/WebAutomation",
	},
];

// export const feedbacks = [
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
// ];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Shuja Akbar",
	description:
		"A passionate Backend Solution Architect and Infrastructure Developer.",
	author: "Shuja Akbar",
	image: "https://avatars.githubusercontent.com/u/59687688?v=4",
	url: "https://shujaakbar.com/",
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
