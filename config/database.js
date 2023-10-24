'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {
	/*
	|--------------------------------------------------------------------------
	| Default Connection
	|--------------------------------------------------------------------------
	|
	| MongoDB
	|
	*/
	connection: Env.get('DB_CONNECTION', 'mongodb'),

		/*-------------------------------------------------------------------------*/
		mongodb: {
			client: 'mongodb',
			connectionString: Env.get('DB_CONNECTION_STRING', ''),
			connection: {
				host: Env.get('DB_HOST', null),
				port: Env.get('DB_PORT', ''),
				username: Env.get('DB_USER', ''),
				password: Env.get('DB_PASSWORD', ''),
				database: Env.get('DB_DATABASE', ''),
				options: {
					// useNewUrlParser: true,
					w: 'majority',
					retryWrites: true,
					writeConcern: {
						j: true
					},
					useNewUrlParser: true,
					useUnifiedTopology: true 
					// replicaSet: Env.get('DB_REPLICA_SET', ''),
					// ssl: Env.get('DB_SSL, '')
					// connectTimeoutMS: Env.get('DB_CONNECT_TIMEOUT_MS', 15000),
					// socketTimeoutMS: Env.get('DB_SOCKET_TIMEOUT_MS', 180000),
					// readPreference: Env.get('DB_READ_PREFERENCE', 'secondary'),
					// authSource: Env.get('DB_AUTH_SOURCE', ''),
					// authMechanism: Env.get('DB_AUTH_MECHANISM', ''),
					// other options
				}
			}
		},

	/*
	|--------------------------------------------------------------------------
	| Sqlite
	|--------------------------------------------------------------------------
	|
	| Sqlite is a flat file database and can be good choice under development
	| environment.
	|
	| npm i --save sqlite3
	|
	*/
	// sqlite: {
	// 	client: 'sqlite3',
	// 	connection: {
	// 		filename: Helpers.databasePath(`${Env.get('DB_DATABASE', 'development')}.sqlite`)
	// 	},
	// 	useNullAsDefault: true
	// },

	/*
	|--------------------------------------------------------------------------
	| MySQL
	|--------------------------------------------------------------------------
	|
	| Here we define connection settings for MySQL database.
	|
	| npm i --save mysql
	|
	*/
	main_db: {
		client: 'mysql2',
		connection: {
			host: Env.get('MAIN_DB_HOST', 'localhost'),
			port: Env.get('MAIN_DB_PORT', ''),
			user: Env.get('MAIN_DB_USER', 'root'),
			password: Env.get('MAIN_DB_PASSWORD', ''),
			database: Env.get('MAIN_DB_DATABASE', 'adonis')
		}
	},

	/*
	|--------------------------------------------------------------------------
	| PostgreSQL
	|--------------------------------------------------------------------------
	|
	| Here we define connection settings for PostgreSQL database.
	|
	| npm i --save pg
	|
	*/
	// pg: {
	// 	client: 'pg',
	// 	connection: {
	// 		host: Env.get('DB_HOST', 'localhost'),
	// 		port: Env.get('DB_PORT', ''),
	// 		user: Env.get('DB_USER', 'root'),
	// 		password: Env.get('DB_PASSWORD', ''),
	// 		database: Env.get('DB_DATABASE', 'adonis')
	// 	}
	// }
}
