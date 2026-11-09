# React Dynamic Routing Blog




## Mock Blog Data
- [X] Create a simple in-memory array of blog post objects. You can create this in a separate file (e.g., lib/posts.ts).
- [X] Each post object should have at least an id, slug (a URL-friendly string), title, and content.

> Blog Post Data in [post.js](./src/data/posts.js) were generated with the help of AI


## Public Blog Pages
- [X] **Blog Index Page (/blog):**
    - [X] This page should display a list of all available blog posts.
    - [X] Each item in the list should be a link that navigates to the specific post’s page using its slug (e.g., /blog/my-first-post).
- [X] **Dynamic Blog Post Page (/blog/[slug]):**
    - [X] This is a dynamic route that should render a single blog post.
    - [X] It must use the slug from the URL to find and display the correct post’s title and content from your mock data.
    - [X] If a post with the given slug cannot be found, it should display a “Post not found” message.

### Routing
> Routing uses React Router with four files doing the work
- **`main.jsx`** turns routing on
    - BrowserRouter reads the URLs and re-renders the app when the URL changes
- **`App.jsx`** maps URLs to pages
    - Routes takes the URLs and checks every Route inside it to find the one that matches
    - `Route element={<Blog />}` is the parent route(layout route) and has no path because it wraps the child routes, so that every route will include the `<Blog/>` component
- **`Blog.jsx`** is the shared layout
    - contains the `<NavBar>` component that will be render with every route
    - uses `<Outlet/>`, which gets swapped for the child route that matches the url
- **`BlogPost.jsx`** display one post
    - reads the dynamic part of the URL `:slug`
    - displays the post the match the `slug`

### Post Context
> The posts context lives in four files that each do one job 
- **`posts.js`** holds the starting data
- **`postReducer.js`** decides how that data can change
    - it has only a default case and adding a new case is easy
- **`PostsProvider.jsx`** stores the data and shares it
- **`PostsContext.js`** creates the shared container and components uses the usePosts() hook to read it

> PostsContext, PostsProvider and postReducer are not needed but I added them because I will add functionality to add, edit and delete post later

## Authentication System (AuthContext)
- [X] **Auth Context:**
    - [X] Create a context (AuthContext) to manage the authentication state.
    - [X] The context should provide:
        - [X] isAuthenticated: A boolean indicating the user’s login status.
        - [X] login(): A function to simulate logging in (sets isAuthenticated to true).
        - [X] logout(): A function to simulate logging out (sets isAuthenticated to false).
- [X] **Login Page (/login):**
    - [X] A simple page with a “Log In” button that calls the login() function from the context.
- [X] **Navbar/Header:**
    - [X] The application’s main navigation should display a “Log In” link if the user is logged out, and a “Log Out” button and a link to the “Admin” page if the user is logged in.
- Actual authentication is not required, but you should use the AuthContext to manage the authentication state and switch between the login and logout states when the buttons are clicked.

## Protected Admin Route
- [X] Admin Page (/admin):
    - [X] This page should be protected. It should only be accessible to authenticated users.
    - [X] If an unauthenticated user tries to access /admin directly, they should be redirected to the /login page.
    - [X] The content can be simple, for example: “Welcome to the Admin Dashboard.”


### Auth Context

- **`authReducer.js`** decides what the new state is for each action
- **`AuthContext.js`** creates the shared context and the useAuth hook that reads from it
- **`AuthProvider.jsx`** holds the state and shares it with the context
- **`main.jsx`** wraps the app in <AuthProvider> so everything inside can tune in
- **`App.jsx`** decides which routes are protected

> authReducer.js is not needed but I added it because I might want to extend to a a real login later


##  Page Transitions
> As a bonus, add simple fade-in/fade-out transitions when navigating between pages. Libraries like framer-motion (specifically its AnimatePresence component) are excellent for this.

### How the transitions work
> The fade is set up in `Blog.jsx`, the layout route that wraps every page, using the `motion` library 
- **`motion.div`** is a `<div>` that accepts animation props
- **`AnimatePresence`** keeps a page on screen after it is removed so its `exit` animation can play
- **`useOutlet()`** is used instead of `<Outlet />` to capture the current page as a value, so the page that is fading out keeps showing its own content instead of switching to the new page early





