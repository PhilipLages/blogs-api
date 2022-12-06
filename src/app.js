const express = require('express');
const postRouter = require('./routers/blogPost.routes');
const categoriesRouter = require('./routers/categories.routes');
const loginRouter = require('./routers/login.routes');
const userRouter = require('./routers/user.routes');
// ...

const app = express();

app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/post', postRouter);
app.use('/categories', categoriesRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
