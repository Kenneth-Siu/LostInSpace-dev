const { getBlogPosts } = require('./posts/getBlogPosts');

const postsPerPage = 5;

exports.createPages = async ({ actions: { createPage } }) => {
    const blogPosts = getBlogPosts();
    blogPosts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());

    createPage({
        path: "/blog/",
        component: require.resolve("./src/components/blog/blogFeedPage.js"),
        context: { 
            posts: blogPosts.slice(0, postsPerPage)
        }
    });
    for (let pageNumber = 1; pageNumber < 1 + (blogPosts.length - 1) / postsPerPage; pageNumber++) {
        createPage({
            path: `/blog/page/${pageNumber}`,
            component: require.resolve("./src/components/blog/blogFeedPage.js"),
            context: { 
                posts: blogPosts.slice(postsPerPage * (pageNumber - 1), postsPerPage * pageNumber)
            }
        });
    }

    blogPosts.forEach(post => {
        createPage({
            path: `/blog/${post.slug}/`,
            component: require.resolve("./src/components/blog/blogPage.js"),
            context: { post }
        });
    });
};
