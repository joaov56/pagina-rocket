const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data");

server.use(express.static("public"));
server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  noCache: true,
});

server.get("/", function (req, res) {
  const data = {
    url:
      "https://avatars2.githubusercontent.com/u/61507139?s=400&u=49181336ad2c4aeb1eb4057b77e32b7cf2ad15c6&v=4",
    name: "João Vitor",
    title: "Desenvolvedor FullStack",
    description:
      "Programador Fullstack focado em desenvolver soluções rápidas para todos os tipos de problemas.",
    links: [
      { name: "Github", url: "https://github.com/joaov56" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/joao-dias56" },
      { name: "Twitter", url: "https://twitter.com/jaumzinnnn" },
    ],
  };
  return res.render("about", { about: data });
});

server.get("/projects", function (req, res) {
  return res.render("projects", { items: videos });
});

server.get("/cursos", function (res, res) {
  const data = [
    {
      url: "https://skylab.rocketseat.com.br/static/media/Starter.64c237cc.svg",
      title: "Torne--se um programador desejado",
      description: "no mercado com esses cursos gratuitos",
    },
    {
      url:
        "https://skylab.rocketseat.com.br/static/media/LaunchBase.08285320.svg",
      title: "Domine programação do zero",
      description: "e tenha acesso às melhores oportunidades do mercado",
    },
    {
      url: "https://skylab.rocketseat.com.br/static/media/GoStack.83a178a0.svg",
      title: "Treinamento imersivo",
      description:
        "nas tecnologias mais modernas de desenvolvimento web e mobile",
    },
  ];

  return res.render("cursos", { dados: data });
});

server.use(function (req, res) {
  res.status(404).render("not-found");
});

server.listen(5000);
