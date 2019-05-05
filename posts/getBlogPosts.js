const { readdirSync, readFileSync } = require("fs");

exports.getBlogPosts = function() {
    const files = readdirSync("./posts");
    const jsonFileNames = files.filter(fileName => fileName.endsWith(".json"));

    return jsonFileNames.map(jsonFileName => {
        const json = require(`./${jsonFileName}`);
        return mapJsonToPost(json);
    });
};

function mapJsonToPost(json) {
    const markdown = readFileSync(`./posts/${json.name}.md`, "utf8");
    return {
        ...json,
        markdown: markdown,
        publishDate: new Date(json.publishDate)
    };
};
