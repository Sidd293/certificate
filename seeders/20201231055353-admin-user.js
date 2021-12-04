'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [
			{
				id: '1340065c-d716-4673-a87c-6f70e2ee5f1d',
				name: 'Admin',
				/*
				 * The encrypted password is "EnvyTheme"
				 * If you want to change the default password then go to the website https://www.devglan.com/online-tools/bcrypt-hash-generator
				 * Then encrypt your string by 9 Rounds and paste here
				 */
				password:
					'$2a$09$Gbm1KTjia4W1zaJTVCoYcOO/zGfXTXJOqb.G0iMQO3YqDzu2ZrToS',
				email: 'admin@admin.com',
				role: 'admin',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	},
};
