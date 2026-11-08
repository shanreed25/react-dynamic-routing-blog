import { Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPosts from './pages/BlogPosts';
import BlogPost from './pages/BlogPost';
import Blog from './components/Blog';
import NotFound from './pages/NotFound'

function App() {

  return (
      <Routes>
        {/* <Route element={<Blog />}> is the parent route(layout route) 
            it is rendered alone with every route nested inside
            
            <Blog /> uses the <Outlet/> component that come from react-router-dom
            it get swapped out for the component that matches the URL
            
            so for /blog, becuase <NavBar/> is inside the <Blog/> component the <NavBar/> component
            will render alone with <BlogPosts />
            */}
        <Route element={<Blog />}>
          <Route path='/' element={<HomePage />}/>
          <Route path='/blog' element={<BlogPosts />}/>
          <Route path='/blog/:slug' element={<BlogPost />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  )
}

export default App
