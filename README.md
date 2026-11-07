# React Dynamic Routing Blog




## Mock Blog Data
- [X] Create a simple in-memory array of blog post objects. You can create this in a separate file (e.g., lib/posts.ts).
- [X] Each post object should have at least an id, slug (a URL-friendly string), title, and content.

> Blog Post Data in [post.js](./src/data/posts.js) were generated with the help of AI


## Public Blog Pages
- [ ] **Blog Index Page (/blog):**
    - [ ] This page should display a list of all available blog posts.
    - [ ] Each item in the list should be a link that navigates to the specific post’s page using its slug (e.g., /blog/my-first-post).
- [ ] **Dynamic Blog Post Page (/blog/[slug]):**
    - [ ] This is a dynamic route that should render a single blog post.
    - [ ] It must use the slug from the URL to find and display the correct post’s title and content from your mock data.
    - [ ] If a post with the given slug cannot be found, it should display a “Post not found” message.


- BrowserRouter reads the URLs and re-renders the app when the URL changes
- Routes takes the URLs and checks every Route inside it to find the one that matches
- `Route element={<Blog />}` is the parent route(layout route) and has no path
    - Uses `<Outlet/>`, which gets swapped for the child route that matches the url
    - It wraps the child routes, so that every route will include the `<Blog/>` component
