import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Analyse des ventes",
    description: "Tableau de bord interactif des ventes.",
    tool: "Power BI",
    dashboardUrl: "https://app.powerbi.com/view?r=XXXXXX",
    githubUrl: "https://github.com/ton-repo/projet-ventes"
  },
  {
    id: 2,
    title: "Performance Marketing",
    description: "Analyse des performances des campagnes marketing.",
    tool: "Looker Studio",
    dashboardUrl: "https://lookerstudio.google.com/reporting/XXXXXX",
    githubUrl: "https://github.com/ton-repo/projet-marketing"
  }
];

function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Bienvenue sur mon Portfolio</h1>
      <p className="mt-4">Découvrez mes projets Data avec des dashboards interactifs.</p>
      <Link to="/projects" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">Voir mes projets</Link>
    </div>
  );
}

function Projects() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <p className="text-gray-600">Outil : {project.tool}</p>
            <div className="mt-4 flex space-x-4">
              <a href={project.dashboardUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">Voir le Dashboard</a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500">Voir le Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white flex space-x-4">
        <Link to="/">Accueil</Link>
        <Link to="/projects">Projets</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
