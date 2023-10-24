'use strict'

// const Cryptr = require('cryptr');
// const cryptr = new Cryptr(process.env.APP_KEY);
// const SATPayment = use('App/Models/SATPayment');
// var Moment = require('moment');
// const { validate, rule } = use('Validator')
var mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
var _ = require('lodash');
const saleSchema = use('App/Models/Sale')
const userSchema = use('App/Models/User')
//const { Client } = require('@elastic/elasticsearch');
// var diff = require("deep-diff");
// const xlsx = require("xlsx");
// const XLSXStyle  = require("xlsx-style");
// const ProductController = use('App/Controllers/Http/ProductController');
// const InvoiceController = use('App/Controllers/Http/InvoiceController');
// const axios = require('axios');
//const _ = require('mongoose-paginate-v2');
// const HelperController = use('App/Controllers/Http/HelperController');
// const TenantController = use('App/Controllers/Http/TenantController');
// const ExchangeRateController = use('App/Controllers/Http/ExchangeRateController');
// const ClientController = use('App/Controllers/Http/ClientController')
// const Env = use('Adonis/Src/Env');





class SaleController {

	async initModels(collections, tenant) {

		  try {
			var response = {}

			const collToModel = {
				sales: "Sale",
				users: "User"
			}
	
			const collToSchema = {
				sales: saleSchema,
				users: userSchema
			}
	
	
			const tenantIdToConnection = {};
	
			let initialConnection = Promise.resolve();
			const  tenantId = tenant;
			if (!tenantIdToConnection[tenantId]) {
			  tenantIdToConnection[tenantId] = mongoose.createConnection(`mongodb://127.0.0.1:27017/tenant_${tenantId}`);
				collections.forEach((collection, index) => {
					// console.log(collection)
					let modelName = collToModel[collection];
					let schema = collToSchema[collection];
					response[modelName] = tenantIdToConnection[tenantId].model(modelName, schema, collection);
				})
			  initialConnection = tenantIdToConnection[tenantId].asPromise();
			}
			const db = tenantIdToConnection[tenantId];			
		  } catch (error) {
			
		  }		  

		return response;
	}

	async create({ request, response, auth }) {
		const { Sale, User } = await this.initModels(['sales', 'users'], request._qs.tenantId);

		const sale = await new Sale({ name: "helpppp" });

		await sale.save();

		return response.status(201).send({
			status: "success",
			data: "!"
		});
	}
}

module.exports = SaleController
