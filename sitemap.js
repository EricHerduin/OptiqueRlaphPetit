const path = require("path");
const fs = require("fs");
const routes = require("src/app/app-routing.module");
const SitemapGenerator = require("sitemap-generator");

const baseUrl = "https://espace.htag-facility.fr.com"; // Remplace cela par l'URL de ton site
const sitemapPath = path.join(__dirname, "dist/browser/sitemap.xml"); // Chemin où le sitemap sera enregistré

const generator = new SitemapGenerator(baseUrl, {
  stripQuerystring: false,
  filepath: sitemapPath,
  urls: routes.map((route) => route.path), // Utilise les chemins des routes pour générer le sitemap
});

generator.on("done", () => {
  console.log("Sitemap generated successfully.");
});

generator.start();

// const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
//   .concat(
//    routes
//       .map((route) =>
//         createUrl(
//           `${HOSTNAME}${route.data.loc}`,
//           route.data.lastmod,
//           route.data.changefreq,
//           route.data.priority
//         )
//       )
//       .join("\n")
//   )

//   .concat("\n</urlset>");

// fs.writeFileSync(path.join(__dirname, "./src/sitemap.xml"), sitemap);
