import User from './user';
import Course from './course';
import Video from './video';
import Enroled_courses from './enroled_courses';
// import Cart from './cart';
import App_Settings from "./app_settings";

import Seed from '../seeders/20201231055353-admin-user';

import user from '../migrations/20201126053857-create-user';
import course from '../migrations/20201126075813-create-course';
import video from '../migrations/20210111073325-create-video';
import enrolled_course from '../migrations/20210125063131-create-enroled-courses';
// import cart from '../migrations/20211103152632-create-cart';
import appSettings from "../migrations/20211106161551-create-app-settings";

// import userUpdated from "../migrations/20211110142150-modify_users_add_new_fields";

('use strict');
// main model file
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	console.log('#here');
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}
console.log(config);
// sequelize = new Sequelize(config.databaseURI);

(async function () {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = User(sequelize, Sequelize);
db.courses = Course(sequelize, Sequelize);
db.videos = Video(sequelize, Sequelize);
db.enroled_courses = Enroled_courses(sequelize, Sequelize);
// db.carts = Cart(sequelize, Sequelize);

db.appSettings = App_Settings(sequelize, Sequelize);

const queryInterface = sequelize.getQueryInterface();
(async function () {
	// await Seed.up(queryInterface, Sequelize);
	await user.up(queryInterface, Sequelize);
	await course.up(queryInterface, Sequelize);
	await video.up(queryInterface, Sequelize);
	await enrolled_course.up(queryInterface, Sequelize);
	// await cart.up(queryInterface, Sequelize);
	await appSettings.up(queryInterface, Sequelize);
	// await userUpdated.up(queryInterface, Sequelize);
})();

// hasMany relationshipt with user and course
db.users.hasMany(db.courses, {
	as: 'courses',
	foreignKey: 'userId',
});
db.courses.belongsTo(db.users, {
	foreignKey: 'userId',
	as: 'user',
});

// hasMany relationshipt with course and videos
db.courses.hasMany(db.videos, {
	as: 'videos',
	foreignKey: 'courseId',
});
db.videos.belongsTo(db.courses, {
	foreignKey: 'courseId',
	as: 'course',
});

// hasMany relationshipt with user and videos
db.users.hasMany(db.videos, {
	as: 'videos',
	foreignKey: 'userId',
});
db.videos.belongsTo(db.courses, {
	foreignKey: 'userId',
	as: 'user',
});

// hasMany relationshipt with course and enroled
db.courses.hasMany(db.enroled_courses, {
	as: 'enroled_courses',
	foreignKey: 'courseId',
});
db.enroled_courses.belongsTo(db.courses, {
	foreignKey: 'courseId',
	as: 'course',
});

// hasMany relationshipt with user and enroled
db.users.hasMany(db.enroled_courses, {
	as: 'enroled_courses',
	foreignKey: 'userId',
});
db.enroled_courses.belongsTo(db.users, {
	foreignKey: 'userId',
	as: 'user',
});

// hasMany relationshipt with course and enroled
// db.courses.hasMany(db.carts, {
// 	as: 'carts',
// 	foreignKey: 'courseId',
// });
// db.carts.belongsTo(db.courses, {
// 	foreignKey: 'courseId',
// 	as: 'course',
// });

// hasMany relationshipt with user and enroled
// db.users.hasMany(db.carts, {
// 	as: 'carts',
// 	foreignKey: 'userId',
// });
// db.carts.belongsTo(db.users, {
// 	foreignKey: 'userId',
// 	as: 'user',
// });

module.exports = db;
