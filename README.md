<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=width-device, initial-sacle="0.1">
	<title>Maha Haj Meftah</title>
	<link rel="stylesheet" href="style.css"">
	<script src="ext.js" language="javascript"></script>
	<script src="https://kit.fontawesome.com/cacb60c650.js" crossorigin="anonymous"></script>

</head>
<body>
	<!--creating Menu Tabs and Log-->
	<header>
		<a href="#" class="logo">{Portfolio}</a>
		<div class="toggle" onclick="toggleMenu();"></div>
		<ul class="menu">
			<li><a href="#home" onclick="toggleMenu();">Home</a></li>
			<li><a href="#about" onclick="toggleMenu();">About</a></li>
			<li><a href="#projects" onclick="toggleMenu();">Projects</a></li>
			<li><a href="#experience" onclick="toggleMenu();">Experience</a></li>
			<li><a href="#contact" onclick="toggleMenu();">Contact</a></li>
		</ul>
	</header>

	<!--creating banner layout-->
	<section class="banner" id="home">
		<div class="textBx">
			<h2>Hello,I'm <br> <span>Maha Haj Meftah</span></h2>
			<h3>I'm a data scientist </h3>
			<a href="#about" class="btn">About Me</a>
		</div>
		<div class="w50">
				<img src="img/Me.jpeg" class="proPicture">
		</div>
	</section>
	<!--creating projects layout-->
	<section class="projects" id="projects">
		<div class="heading">
			<h2>My Last Projects</h2>
			<p>See my projects</p>
		</div>
		<div class="content">
			<div class="projectBx">
				<a href="https://github.com/mahahajmeftah/Predictive-Maintenance-System/blob/main/README.md" target="_blank">
					<img src="img/predictive.jpg",alt="">
					<p>Predictive Maintenance System</p>
				</a>
			</div>
			<div class="projectBx">
				<a href="https://github.com/mahahajmeftah/clothes-Calssification/blob/main/README.md" target="_blank">
					<img src="img/clothes.jpg",alt="">
					<p>Clohtes Classification using Deep Learning</p>
				</a>
			</div>
			<div class="projectBx">
				<a href="https://github.com/mahahajmeftah/Lead-Scoring-With-Logistic-Regression" target="_blank">
					<img src="img/churn.jpg",alt="">
					<p>Leading Scoring with Logistic Regression</p>
				</a>
			</div>
			
			<div class="projectBx">
				<a href="https://nbviewer.org/github/mahahajmeftah/Exploratory-data-analysis-of-Prosper-Loan-data/blob/main/exploratory-data%20analysis.ipynb" target="_blank">
					<img src="img/loan.jpg",alt="">
					<p>Data Analysis and Visualisations on Prosper Loan Dataset</p>
				</a>
			</div>
			<div class="projectBx">
				<a href="img/churn.jpg" target="_blank">
					<img src="img/churn.jpg",alt="">
					<p>Customer churn with Logistic Regression</p>
				</a>
			</div>
			<div class="heading">
				<a href="https://github.com/mahahajmeftah",target="_blank" class="btn">View all my projects</a>
			</div>
			
		</div>
	</section>
	<!--Creating experience Me Layout-->
	<section class="experience" id="experience">
		<div class="heading">
			<h2>Experience</h2>
		</div>
		<div class="timeline">
			<div class="timeline-item">
				<div class="timeline-dot"></div>
				<div class="timeline-content">
					<h3>STMicroelectronics</h3>
					<h4>AI Aprrentencie</h4>
					<p>October 2023- September 2024 | Le Mans, France</p>
					<p> I developed and deployed an automated AI solution for test log analysis,
						achieving an impressive 70% reduction in processing time.
						By implementing unsupervised machine learning algorithms,
						I was able to identify and retrieve duplicate bugs efficiently,
						streamlining the debugging process.
						I also built and optimized data models to enhance analysis accuracy, ensuring reliable insights.
						To support this, 
						I designed and implemented robust data collection and storage systems using MySQL, 
						facilitating effective data management. Additionally, I Dockerized the entire solution, to ensure scalability </p>
				</div>
			</div>
			<!-- Repeat the timeline-item div for each experience entry -->
		</div>
	</section>
	<!--Creating About Me Layout-->
	<section class="about" id="about">
		<div class="heading">
			<p>Get to Konw me </p>
			<h2>About Me</h2>
		</div>
		<div class="content">
			<div class="w50">
				<img src="img/Me.jpeg" class="proPicture">
			</div>
			<div class="contentBx w50">
			<h2>I'm<b> Maha Haj Meftah</b>, a data scientist</h2>
			<p>I am a recent graduate with a diploma in Computer Science and Automation Engineering from Polytech Angers
			, <br>I have an interest in data science machine learning ,
			deeplearning.I did many internships, projects <br>and get online courses to build
			strong skills. I'm constantly learning new things.
			</p>
			<div class="heading bottom">
				<a href="img/resume.pdf" target="_blank" class="btn round">Download CV</a>
			</div>
		</div>
	</section>
	<!--creating Contact section-->
	<section class="contact" id=contact>
		<div class="heading">
			<h2>Get In touch</h2>
		</div>
		<div class="social">
			<!--github-->
			<div class="icon">
				<a href="https://github.com/mahahajmeftah" target="_blank">
					<i class="fab fa-github"></i>
				</a>
			</div>
			<!--linkedin-->
			<div class="icon">
				<a href="https://www.linkedin.com/in/maha-haj-meftah-02a0b5132/" target="_blank">
					<i class="fab fa-linkedin"></i>
				</a>
			</div>
			<!--gmail-->
			<div class="icon">
				<a href="hajmeftahmaha@gmail.com" target="_blank">
					<i class="fab fa-google"></i>
				</a>
			</div>
		</div>
	</section>
	<!--footer-->
	<footer class="copyright">
		<p>Copyright &copy; 2024,All rights reserved</p>
	</footer>

</body>

