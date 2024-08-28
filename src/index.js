const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT;

const upload = require('./middleware/multer');
const middlewareLogRequest = require('./middleware/logs');

app.use(express.json());
app.use(middlewareLogRequest);
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static('./public/images'));

// const multipleupload = upload.fields([{name: 'image', maxCount: 1}, {name: 'ktp', maxCount: 1}])
const usersController = require('./users/users.controller');
const cheannelsController = require('./channels/channels.controller');
const categoriesController = require('./categories/categories.controller');
const tagsController = require('./tags/tags.controller');
const followController = require('./follows/follows.controller');
// const discussionroomController = require("")
const favoriteController = require('./favorites/favorites.controller');
const eventController = require('./events/events.controller');


app.use('/api/users', upload.none(), usersController);

app.use('/api/categories', upload.none(), categoriesController);
app.use('/api/tags', upload.none(), tagsController);
app.use('/api', upload.none(), followController);
app.use('/api', upload.none(), favoriteController);
app.use('/api/events', upload.none(), eventController);

app.use('/api/channels', upload.none(), cheannelsController);





app.listen(PORT, () => {
    console.log("express API runningin port: " + PORT);
});