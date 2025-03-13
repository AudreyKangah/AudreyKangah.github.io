
<!DOCTYPE html>
<!-- Créé par CodingNepal -->
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Personnel</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
</head>
<body>
    <div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
    </div>
    <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#">Portfo<span>lio.</span></a></div>
            <ul class="menu">
                <li><a href="#home" class="menu-btn">Accueil</a></li>
                <li><a href="#about" class="menu-btn">À propos</a></li>
                <li><a href="#services" class="menu-btn">Services</a></li>
                <li><a href="#skills" class="menu-btn">Compétences</a></li>
                <li><a href="#teams" class="menu-btn">Équipe</a></li>
                <li><a href="#contact" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    
    <!-- Section Accueil -->
    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Bonjour, je m'appelle</div>
                <div class="text-2">Prakash Shashi</div>
                <div class="text-3">Et je suis <span class="typing"></span></div>
                <a href="#">Engagez-moi</a>
            </div>
        </div>
    </section>

    <!-- Section À propos -->
    <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">À propos de moi</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="images/profile-1.jpeg" alt="Photo de Prakash">
                </div>
                <div class="column right">
                    <div class="text">Je suis Prakash et je suis <span class="typing-2"></span></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <a href="#">Télécharger CV</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Services -->
    <section class="services" id="services">
        <div class="max-width">
            <h2 class="title">Mes services</h2>
            <div class="serv-content">
                <div class="card">
                    <div class="box">
                        <i class="fas fa-paint-brush"></i>
                        <div class="text">Design Web</div>
                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-chart-line"></i>
                        <div class="text">Publicité</div>
                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <i class="fas fa-code"></i>
                        <div class="text">Conception d'Applications</div>
                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Compétences -->
    <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">Mes compétences</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">Mes compétences créatives & expériences.</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    <a href="#">En savoir plus</a>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Contact -->
    <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Me contacter</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Entrer en contact</div>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Nom</div>
                                <div class="sub-title">Prakash Shashi</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Adresse</div>
                                <div class="sub-title">Surkhet, Népal</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">abc@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Envoyez-moi un message</div>
                    <form action="#">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Nom" required>
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" required>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Sujet" required>
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message..." required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Pied de page -->
    <footer>
        <span>Créé par <a href="https://www.codingnepalweb.com">CodingNepal</a> | <span class="far fa-copyright"></span> 2020 Tous droits réservés.</span>
    </footer>
    <script src="script.js"></script>
</body>
</html>
