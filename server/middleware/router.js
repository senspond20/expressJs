import app from './render'
import indexRoutes from '../routes'
import postsRoutes from '../routes/post'
import pagesRoutes from '../routes/page'

// routes

/* index */
app.use("/", indexRoutes);

/* post */
app.use("/api/post", postsRoutes);

/* page */
app.use("/page", pagesRoutes);

export default app;
