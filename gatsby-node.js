const { getChangelogPosts } = require('./posts/getChangelogPosts');

const postsPerPage = 5;

exports.createPages = async ({ actions: { createPage } }) => {
    const changelogPosts = getChangelogPosts().filter(post => Date.now() - post.publishDate > 0);
    changelogPosts.sort((a, b) => b.publishDate - a.publishDate);

    createPage({
        path: "/changelog/",
        component: require.resolve("./src/components/changelog/changelogFeedPage.js"),
        context: { 
            posts: changelogPosts.slice(0, postsPerPage)
        }
    });
    for (let pageNumber = 1; pageNumber < 1 + (changelogPosts.length - 1) / postsPerPage; pageNumber++) {
        createPage({
            path: `/changelog/page/${pageNumber}`,
            component: require.resolve("./src/components/changelog/changelogFeedPage.js"),
            context: { 
                posts: changelogPosts.slice(postsPerPage * (pageNumber - 1), postsPerPage * pageNumber)
            }
        });
    }

    changelogPosts.forEach(post => {
        createPage({
            path: `/changelog/${post.slug}/`,
            component: require.resolve("./src/components/changelog/changelogPage.js"),
            context: { post }
        });
    });
};
