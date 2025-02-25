<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Data Analyst</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!--creating Menu Tabs and Log-->
    <header>
        <h1>Portfolio Data Analyst</h1>
        <nav>
            <ul>
                <li><a href="#about">À propos</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#experience">Experiences</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

<!--Création d'une mise en page À propos de moi-->
    <section class="banner" id="about">
        <div class="textBx">
			<h2>Bonjour,je suis <br> <span>Audrey Marlene KANGAH</span></h2>
			<h3>Je suis une data analyst </h3>
            <p>Passionné par l’analyse de données, je crée des tableaux de bord interactifs avec Power BI, Looker Studio et Excel.</p>
			<a href="#experience" class="btn">Experiences</a>
		</div>
		<div class="w50">
				<img src="img/me.jpg" class="proPicture">
		</div>
    </section>

<!--création d'une mise en page de projets-->
    <section id="projects">
        <h2>Mes Projets</h2>
        <div class="project">
            <h3>Analyse des Ventes</h3>
            <p>Dashboard interactif réalisé avec Power BI.</p>
            <a href="https://app.powerbi.com/view?r=XXXXXX" target="_blank">Voir le Dashboard</a>
            <a href="https://github.com/USERNAME/projet-ventes" target="_blank">Voir le Code</a>
        </div>
        <div class="project">
            <h3>Performance Marketing</h3>
            <p>Analyse des campagnes marketing avec Looker Studio.</p>
            <a href="https://lookerstudio.google.com/reporting/XXXXXX" target="_blank">Voir le Dashboard</a>
            <a href="https://github.com/USERNAME/projet-marketing" target="_blank">Voir le Code</a>
<!-- Répétez la div timeline-item pour chaque entrée d'expérience -->
        </div>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p>Retrouvez-moi sur <a href="https://linkedin.com/in/USERNAME" target="_blank">LinkedIn</a> ou contactez-moi par email.</p>
    </section>

</body>
</html>
