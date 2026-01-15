import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { IdAttributePlugin } from "@11ty/eleventy";
import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig)
{
    // Configure Eleventy
    eleventyConfig.setInputDirectory(".");
    eleventyConfig.setOutputDirectory("docs");
    eleventyConfig.addGlobalData("layout", "index.liquid");

    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPlugin(IdAttributePlugin);

    eleventyConfig.addCollection("notes", async (collectionsApi) => {
        // get unsorted items
        let notes = collectionsApi.getFilteredByGlob(["[0-9]*_*.md"]);
        //console.log(notes);
		return notes;
	});
    
    //console.log("config test");
    //eleventyConfig.setTemplateFormats("html,liquid,njk");

    
    // Copy `img/` to `_site/img/`
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("pdf");

	// Copy `css/fonts/` to `_site/css/fonts/`
	eleventyConfig.addPassthroughCopy("fonts");
	eleventyConfig.addPassthroughCopy("styles");
};

export const config = {
	pathPrefix: "/2J2-NotesDeCours/",
}
