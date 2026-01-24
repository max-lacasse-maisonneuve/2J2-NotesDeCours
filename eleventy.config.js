import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { IdAttributePlugin } from "@11ty/eleventy";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig)
{
    // Configure Eleventy
    eleventyConfig.setInputDirectory(".");
    eleventyConfig.setOutputDirectory("docs");
    eleventyConfig.addGlobalData("layout", "index.liquid");

    // Ajout du 2J2-NotesDeCours à la URL (GU Pages)
    eleventyConfig.addPlugin(HtmlBasePlugin);
    // Remplacement d'images
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    // Ajout de id aux titres dans les pages
    eleventyConfig.addPlugin(IdAttributePlugin);
    
    // Filtrer les sources utilisées
    eleventyConfig.addCollection("notes", async (collectionsApi) => {
        // get unsorted items
        //let notes = collectionsApi.getFilteredByGlob(["[0-9]*_*.md"])
        let notes = [...collectionsApi.getFilteredByGlob(["[0-9]*_*.md"]), ...collectionsApi.getFilteredByGlob(["Ressource_*.md"])];
        notes.sort(function (a, b)
        {
            if (a.fileSlug < b.fileSlug)
            {
                return -1
            }
            else
            {
                return 1
            }
        });
        //console.log(notes);
		return notes;
	});
        
    // Copie des assets
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("pdf");
	eleventyConfig.addPassthroughCopy("fonts");
	eleventyConfig.addPassthroughCopy("styles");
};

// Ajout du 2J2-NotesDeCours à la URL (GU Pages)
export const config = {
	pathPrefix: "/2J2-NotesDeCours/",
}
