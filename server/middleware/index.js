import app from '../config/app-config'
import postsRoutes from '../routes/post'
import testRoutes from '../routes/test'

// index
app.get("/" ,(req,res)=>{
    res.render('index.html')
});

// routes
app.use("/api/post", postsRoutes);
app.use("/api/test", testRoutes);

export default app;
