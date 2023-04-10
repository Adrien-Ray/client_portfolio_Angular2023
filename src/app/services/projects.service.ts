import { Injectable } from '@angular/core';
import { Project } from "../models/project.model";
import { Observable, filter, find, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ProjectsService {
  constructor(private http: HttpClient){}

  projects: Project[] = [];


    
    /* projects: Project[] = [
        {
            project_id: "10",
            project_title: "fcremilly.org",
            project_thumbnail: "2021-07-07_06-47-10_thumbnail-fcr.jpg",
            project_thumbnail_fit: "0",
            project_context: "un club de football local cherche a acquérir un site pour géré une micro-boutique de pré-commande et centraliser ses informations dispersé sur divers plates-formes (notamment Facebook et Instagram). ",
            project_begin: "2020-01-01",
            project_end: null,
            project_colabs: null,
            project_github: "",
            project_link: "https://fcremilly.org/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: "A l'origine, la demande était de créer une page de commande pour des articles vendu par l'association. Il a ensuite été question de créer une page de présentation de l'association, et enfin un système de publication d'articles. Le tout géré par le club depuis un backoffice complèt. A cela, il a fallut ajouter un bandeau défilant sous la bannière du site, ainsi qu'un système de pop-up pour récapituler les horaires actuels et les évènements du club."
          },
          {
            project_id: "11",
            project_title: "dashboard.net",
            project_thumbnail: "2021-07-07_13-57-58_thumbnail-dashboard.png",
            project_thumbnail_fit: "0",
            project_context: "exercice personnel de création de bloc-notes en ligne, système de marque-pages et messagerie en PHP.",
            project_begin: "2020-06-01",
            project_end: null,
            project_colabs: null,
            project_github: "",
            project_link: "https://accesdenied.net/archives/dashboard/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "13",
            project_title: "visualtgr",
            project_thumbnail: "2021-07-07_16-06-10_visualtgr.png",
            project_thumbnail_fit: "0",
            project_context: "premier exercice de travail en équipe au sein de Accès code school.\r\n\r\nancienne URL: https://adrienr.promo-68.codeur.online/visualtgr/pages/index.php",
            project_begin: "2021-04-08",
            project_end: "2021-04-29",
            project_colabs: null,
            project_github: "https://github.com/Fire-Owl/adrien-etienne",
            project_link: "https://accesdenied.net/archives/visualtgr/",
            project_design_file_link: "https://github.com/Fire-Owl/adrien-etienne/tree/main/design/AD",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "14",
            project_title: "a11e",
            project_thumbnail: "2021-07-08_09-26-02_thumbnail-a11e.png",
            project_thumbnail_fit: "0",
            project_context: "dans le cadre de la formation de web design, création du dossier de conception d'un site de sensibilisation sur le numérique vis-à-vis des personnes sourdes.\r\n\r\nancienne URL:\r\nhttps://adrienr.promo-68.codeur.online/a11e",
            project_begin: "2021-05-06",
            project_end: "2021-05-25",
            project_colabs: null,
            project_github: "https://github.com/Fire-Owl/a11e-accessibilite",
            project_link: "https://accesdenied.net/archives/a11e/",
            project_design_file_link: "https://github.com/Fire-Owl/a11e-accessibilite/tree/main/dossier-conception",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "16",
            project_title: "portfolio",
            project_thumbnail: "2021-11-09_16-47-46_thumbnail_portfolio_v2.jpg",
            project_thumbnail_fit: "0",
            project_context: "dans le cadre de la formation de web designer à l’accès code school de Dijon, création d'un site destiné a présenter mes projets, ainsi qu'à publier des articles.",
            project_begin: "2021-06-07",
            project_end: null,
            project_colabs: null,
            project_github: "https://github.com/Adrien-Ray/domains-portfolio",
            project_link: "https://portfolio.accesdenied.net",
            project_design_file_link: "https://github.com/Adrien-Ray/domains-portfolio",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "17",
            project_title: "shape",
            project_thumbnail: "2021-09-01_11-07-41_capture.png",
            project_thumbnail_fit: "0",
            project_context: "dans le cadre de la formation web design a l'access code school, intégration en groupe d'un theme wordpress d'agence web fictive a partir d'un dossier de conception.\r\n\r\nancienne URL:\r\nhttps://adrienr.promo-68.codeur.online/shape/",
            project_begin: "2021-07-19",
            project_end: "2021-08-31",
            project_colabs: null,
            project_github: "https://github.com/shape-agency",
            project_link: "https://accesdenied.net/archives/shape/",
            project_design_file_link: "https://github.com/shape-agency/shape-design/blob/main/design/dossier-de-conception-SHAPE.pptx",
            project_visibility: "1",
            project_specification_tech: "le contenu doit être entièrement modifiable via l'espace d'administration de wordpress.\r\n",
            project_specification_function: "utilisation de plugin wordpress (newsletter, Contact Form 7, Duplicator), imbrication de boucles."
          },
          {
            project_id: "18",
            project_title: "gwendoline-api",
            project_thumbnail: "2021-09-01_16-21-43_thumbnail-gwendoline-api.png",
            project_thumbnail_fit: "0",
            project_context: "dans le cadre de la formation de web designer, conception d'une API pour scraper puis redistribuer l'information a des sites clients. Élaboration d'une documentation pour son utilisation.\r\n\r\nancienne URL:\r\nhttps://adrienr.promo-68.codeur.online/projet-gwendoline-api/",
            project_begin: "2021-05-28",
            project_end: "2021-08-25",
            project_colabs: null,
            project_github: "https://github.com/Fire-Owl/projet-gwendoline-api/tree/adrien",
            project_link: "https://accesdenied.net/archives/api-gwendoline/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "installation d'un server node.js , scrapper et redistribution sous format json. élaboration d'un script de réception des données a destination des utilisateurs de l'API.",
            project_specification_function: ""
          },
          {
            project_id: "19",
            project_title: "alphaweb",
            project_thumbnail: "2021-09-08_15-35-33_capture.jpg",
            project_thumbnail_fit: "0",
            project_context: "dans le cadre de ma formation de web-design à Access code school, élaboration du design d'un site a destination d'une agence web fictive.",
            project_begin: "2021-07-05",
            project_end: "2021-07-19",
            project_colabs: null,
            project_github: "https://github.com/alphaweb-dijon",
            project_link: "",
            project_design_file_link: "https://github.com/alphaweb-dijon/alphaweb/blob/main/design/dossier-conception.pdf",
            project_visibility: "1",
            project_specification_tech: "ce site devra être intégré avec wordpress.",
            project_specification_function: "tout les contenus doivent pouvoir être géré par le client via un backoffice."
          },
          {
            project_id: "20",
            project_title: "esprit sud",
            project_thumbnail: "2021-09-22_17-59-37_thumbnail_esprit_sud.png",
            project_thumbnail_fit: "1",
            project_context: "dans le cadre d'un stage chez yupanki, agence de communication dijonnaise, création d'une maquette puis d'une pré-production codé en dure, avant d'être transformer en  site wordpress (création d'un theme).\r\n\r\npremière mouture du theme par williams, seconde effectuer par moi-même (refonte du catalogue et du footer quelques mois plus tard).",
            project_begin: "2021-09-13",
            project_end: "2021-09-20",
            project_colabs: null,
            project_github: "",
            project_link: "https://www.esprit-sud-by-cmtp.fr/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "23",
            project_title: "terrasse-resine.fr",
            project_thumbnail: "2021-11-13_10-27-47_thumbnail_terrasse-resine.fr.png",
            project_thumbnail_fit: "1",
            project_context: "dans le cadre d'un stage dans une agence de communication, création zoning, maquette, prototype et intégration WordPress pour le compte d'une cliente.",
            project_begin: "2021-09-20",
            project_end: "2021-10-01",
            project_colabs: null,
            project_github: "",
            project_link: "https://www.terrasse-resine.fr/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "25",
            project_title: "latitude21.fr",
            project_thumbnail: "2022-01-13_15-35-32_logo-latitude21-grand.jpg",
            project_thumbnail_fit: "1",
            project_context: "thème wordpress réaliser sur le design d'un site pré-existant, ajout de fonctions (tags, recherche,...) et réorganisation des pages et de la navigation.",
            project_begin: "2021-12-27",
            project_end: "2022-01-12",
            project_colabs: null,
            project_github: "",
            project_link: "https://www.latitude21.fr/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "26",
            project_title: "yupanki.fr",
            project_thumbnail: "2022-01-24_08-31-54_yupanki-logo-sansbeaseline.svg",
            project_thumbnail_fit: "1",
            project_context: "création du site de l'entreprise Yupanki, agence web et agence de communication.",
            project_begin: "2022-01-13",
            project_end: "2022-01-21",
            project_colabs: null,
            project_github: "",
            project_link: "https://www.yupanki.fr/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "27",
            project_title: "passion-histoire.fr",
            project_thumbnail: "2022-03-08_09-40-15_thumbnail_passion_histoire.png",
            project_thumbnail_fit: "1",
            project_context: "theme wordpress from scratch, réalisé dans le cadre de l'agence yupanki. site type blogging, articles sur l'histoire local autour de Dijon et Bourg en Bresse.",
            project_begin: "2022-02-04",
            project_end: "2022-02-07",
            project_colabs: null,
            project_github: "",
            project_link: "https://www.passion-histoire.fr/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "28",
            project_title: "Nong Khaï",
            project_thumbnail: "2022-03-08_12-08-41_logo.svg",
            project_thumbnail_fit: "1",
            project_context: "création d'un theme wordpress dans le cadre de mon travail à l'agence Yupanki.",
            project_begin: "2022-03-03",
            project_end: "2022-03-07",
            project_colabs: null,
            project_github: "",
            project_link: "https://www.nang-massage-thai.fr/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "29",
            project_title: "Oui Permis",
            project_thumbnail: "2022-03-30_13-49-33_thumbnail-oui-permis.svg",
            project_thumbnail_fit: "1",
            project_context: "dans le cadre de mon travail dans l'agence Yupanki, création d'un site vitrine wordpress.",
            project_begin: "2022-03-22",
            project_end: "2022-03-28",
            project_colabs: null,
            project_github: "",
            project_link: "https://www.oui-permis.fr/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "30",
            project_title: "frontBlog",
            project_thumbnail: "2022-05-23_09-14-29_generic_front.png",
            project_thumbnail_fit: "1",
            project_context: "Ceci est un petit projet perso sans prétention, codé sur quelques heures par-ci par là. Lorsque j'ai touché au code pour la toute première fois (HTML+CSS), mon but était de créer une interface simple de bloc note avec des liens entre les fichiers, le tout utilisé en tant que fichiers (URL file:///, car je n'avais alors jamais installé de serveur). ce projet, c'est la même chose, quelques années et compétences plus tard.",
            project_begin: "2022-05-21",
            project_end: "2022-05-24",
            project_colabs: null,
            project_github: "https://github.com/persoWww/frontblog",
            project_link: "https://frontblog.accesdenied.net/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: " - doit fonctionner en dehors de tout serveur, interpréteur.\r\n - doit permettre d'intégré des contenus, un peut comme Wordpress mais en full front (HTML CSS JavaScript) et de les rendre accessibles avec un index, des menus.\r\n - du fait que cela fonctionne sans back, il est certes nécessaire de rentrer les contenu en éditant du code (via navigateur de fichier ou ftp) mais le contenu éditer doit vaguement ressembler à une base de donnée, les éléments de navigations doivent se présenter de la manière la plus automatisé qu'il soit permis avec du code only front.\r\n - doit permettre un minimum de personnalisation (fichier de variable css,...)",
            project_specification_function: "on doit voir ça soit comme un genre de bloc note évoluer, que l'on pose en tant que simple dossier pour prise de note avec un interface type bloging (par exemple direct sur le bureau), soit comme une base CMS ultra light (89kB à la v1.4, dont la majoritée pour les quelques images présentes). Un projet full front jusqu'au bout (fonctionnement hors serveur), cela veut aussi malheureusement dire, à l'heure actuel, que l'usage de modules js est proscrit, bien qu'il s'agisse de js natif. aussi pas d'import de script/bibliothèque externe, pour un éventuel usage hors ligne."
          },
          {
            project_id: "31",
            project_title: "psykapages",
            project_thumbnail: "2022-05-31_11-09-11_thumbnail_psycapages.png",
            project_thumbnail_fit: "0",
            project_context: "Ceci représente quelques résultats de tests front, orienté travail ou perso. prise en main de nouvelles méthodes, tentative de créer des visuels web atypiques, ceci est un condensé de résultats suffisamment aboutis pour être rendu publique.\r\nCeci sera mis à jour à chaque fois qu'un nouvel exemple pourra y être ajouté. Le but ici est notamment que chacun puisse récupéré des bouts de codes pour créer ces propres fronts. Si c'est votre cas, n'hésitez pas à me le faire savoir en envoyant le lien via le formulaire de contact (page à propos).",
            project_begin: "2022-05-30",
            project_end: "2022-05-31",
            project_colabs: null,
            project_github: "https://github.com/Adrien-Ray/psycapages",
            project_link: "https://accesdenied.net/psycapages/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "32",
            project_title: "adhésif industriel",
            project_thumbnail: "2022-10-20_11-42-32_thumbnail_experience.png",
            project_thumbnail_fit: "0",
            project_context: "site wordpress, thème from scratch.\r\nancien site: http://old.adhesif-industriel.fr/\r\ntrès ancien site: https://www.experience.fr/",
            project_begin: "2022-10-03",
            project_end: "2022-10-19",
            project_colabs: null,
            project_github: "",
            project_link: "https://www.adhesif-industriel.fr/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "33",
            project_title: "myMonitoring",
            project_thumbnail: "2022-10-20_11-54-27_thumbnail_mymonitoring.png",
            project_thumbnail_fit: "0",
            project_context: "projet perso, tools de travail, ce projet a pour but de permettre une mesure de temps de réponse sur une url depuis votre poste. généralement, si vous utilisés des outils gratuis comme pagespeed ou gtmetrix, le calcul se fait depuis les états unis ou le canada. ici c'est vous qui faîtes la requête, de là ou vous vous trouvez.",
            project_begin: "2022-10-20",
            project_end: "2022-10-20",
            project_colabs: null,
            project_github: "https://github.com/Adrien-Ray/myMonitoring",
            project_link: "",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "vous pouvez: tester une url en la collant dans un input, tester une liste de site ayant chacuns une ou plusieurs urls que vous enregistrer dans un json, classer vos url par tags pour ne tester que tel ou tel catégorie (vous pouvez assigner 0, 1 ou plusieurs catégories par site).\r\n\r\nlorsque vous tester un site/ une url, vous pouvez cliquer sur le temps de réponse d'une url et cela crée un nouveau rapport basé sur 10 requêtes vers celle-ci.\r\n\r\nles temps trop longs ou les codes d'erreurs s'affichent en orange ou rouge, la premiere ligne du raport indique le nombre d'erreurs critiques. Les rapports sur 10 requêtes vous donne également le temps moyen de réponse.",
            project_specification_function: ""
          },
          {
            project_id: "35",
            project_title: "lafabriquedeperspectives.fr",
            project_thumbnail: "2023-01-13_15-37-47_logo-lfdp.png",
            project_thumbnail_fit: "1",
            project_context: "refonte d'un site. \r\nurl ancient site: https://oldsite.lafabriquedeperspectives.fr/",
            project_begin: "2022-12-01",
            project_end: "2023-02-03",
            project_colabs: null,
            project_github: "",
            project_link: "https://www.lafabriquedeperspectives.fr/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "36",
            project_title: "bati-service.fr",
            project_thumbnail: "2023-01-13_15-59-34_thumbnail-batiservice_min.jpg",
            project_thumbnail_fit: "0",
            project_context: "Dans le cadre de mon travail pour l'agence Yupanki, création d'un site pour une entreprise de maçonnerie.",
            project_begin: "2023-01-13",
            project_end: "2022-12-26",
            project_colabs: null,
            project_github: "",
            project_link: "https://www.batiservices01.fr/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "37",
            project_title: "LEGUN PRODUCTION",
            project_thumbnail: "2023-02-24_10-53-49_legun_min.png",
            project_thumbnail_fit: "0",
            project_context: "Dans le cadre de l'agence Yupanki, création d'un thème enfant woocomerce à partir d'une maquette. Ce site sera prochainement mis en ligne.",
            project_begin: "2022-12-07",
            project_end: "2023-01-31",
            project_colabs: null,
            project_github: "",
            project_link: "",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "38",
            project_title: "francoise-thuillier.fr",
            project_thumbnail: "2023-02-24_10-53-54_thuiller-picto.svg",
            project_thumbnail_fit: "1",
            project_context: "Dans le cadre de l'agence Yupanki, création d'un thème wordpress.",
            project_begin: "2023-02-08",
            project_end: "2023-02-09",
            project_colabs: null,
            project_github: "",
            project_link: "https://www.francoise-thuillier.fr/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "",
            project_specification_function: ""
          },
          {
            project_id: "39",
            project_title: "MLPC",
            project_thumbnail: "2023-03-04_18-32-17_react.png",
            project_thumbnail_fit: "1",
            project_context: "Outil d'écriture de pages Mentions légales et politique de confidentialité selon un template demandé (validité du contenu non-garantie).",
            project_begin: "2023-03-03",
            project_end: "2023-03-03",
            project_colabs: null,
            project_github: "https://github.com/Adrien-Ray/MLPC",
            project_link: "",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "Utilisation de REACT (découverte de create-react-app)",
            project_specification_function: ""
          },
          {
            project_id: "40",
            project_title: "Gnu Personal Stats",
            project_thumbnail: "2023-03-18_19-36-02_logo_gps.svg",
            project_thumbnail_fit: "1",
            project_context: "Dans le cadre de ma formation de Concepteur Développeur d'Application, création d'une application de saisie et de visualisation de données numérique. Lien vers le repo backend: https://gitlab.com/ofp-oc-cda2/adrien/gps",
            project_begin: "2022-03-17",
            project_end: "2022-12-23",
            project_colabs: null,
            project_github: "https://gitlab.com/ofp-oc-cda2/adrien/gps_quasar",
            project_link: "",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "pile technique: docker-compose, nodeJs (express, Jwt Mongoose), Quasar (VueJs3), MongoDb, Mongo Express.",
            project_specification_function: "saisit de données, visualisation sous forme d'un diagramme dynamique. export build desktop (electron) linux (possible mac et windows), mobile (capacitor) Androïd (possible IOS)"
          },
          {
            project_id: "41",
            project_title: "Client portfolio REACT 2023",
            project_thumbnail: "2023-03-18_19-46-24_logo-perso.svg",
            project_thumbnail_fit: "1",
            project_context: "Création d'une API permettant de récupéré dynamiquement les informations publique du présent portfolio, et création d'un client avec Create React App.",
            project_begin: "2023-03-06",
            project_end: null,
            project_colabs: null,
            project_github: "https://github.com/Adrien-Ray/client_portfolio_react2023",
            project_link: "https://accesdenied.net/archives/portfolio-client-react-2023/",
            project_design_file_link: "",
            project_visibility: "1",
            project_specification_tech: "Ce projet utilise une API simple construite avec PHP et un client web construit avec REACT.",
            project_specification_function: "Ce projet doit, dans une interface statique, récupéré les informations publiques du portfolio via une API, puis les restituer dans un front différent du portfolio servant de base."
          }
    ]; */
    /* getAllProjects(): Project[]{
        return this.projects;
        // return this.getUsers();
    } */
    getAllProjects(): Observable<Project[]>{
      return this.http.get<any>('https://portfolio.accesdenied.net/api/index.php').pipe(
        map(response => response.project)
      );
    }
    getByIdProject(projectId: number): Project{
        const result = this.projects.find(project => project.project_id === `${projectId}`);
        if (!result) {
            throw new Error('id not found ... 4587');
        } else {
            return result;
        }
    }
    getByIdProjectThumbUrl(projectId: string): Observable<string>{
      return this.http.get<any>('https://portfolio.accesdenied.net/api/index.php').pipe(
        map(response => response.project),
        filter(project => project.project_id === projectId),
        map(response => `https://portfolio.accesdenied.net/assets/img/upload/${response.project_thumbnail}`),
      );
      /* const result: Project = this.getAllProjects().pipe(
        find(obj => obj.project_id === projectId)
      );
      if (!result) {
          throw new Error('id not found ... 999');
      } else {
          return `https://portfolio.accesdenied.net/assets/img/upload/${result.project_thumbnail}`;
      } */
    }
}