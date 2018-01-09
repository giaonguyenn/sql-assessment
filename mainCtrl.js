module.exports = {

	getUsers: (req, res, next) => {
		req.app.get("db").get_users()
		.then(response => res.json(response)
    	.catch(err => console.log(err)))
	},

	getVehicles: (req, res, next) => {
		req.app.get("db").get_vehicles()
		.then(response => res.json(response)
    	.catch(err => console.log(err)))
	},

	postUsers: (req, res, next) => {
		const {name, email} = req.body;

		req.app.get("db").post_users([name, email])
		.then(response => res.json(response)
    	.catch(err => console.log(err)))
	},

	postVehicles: (req, res, next) => {
		const {make, model, year, owner_id} = req.body;

		req.app.get("db").post_vehicles([make, model, year, owner_id])
		.then(response => res.json(response)
    	.catch(err => console.log(err)))
	},

	getVehicleCount: (req, res, next) => {
		req.app.get("db").get_vehicle_count([req.params.userId])
		.then(response => res.json(response)
    	.catch(err => console.log(err)))
	},

	getVehiclesByUser: (req, res, next) => {
		req.app.get("db").get_vehicles_by_user([req.params.userId])
		.then(response => res.json(response)
    	.catch(err => console.log(err)))
	},

	getVehiclesByEmail: (req, res, next) => {
		const db = req.app.get("db");

		if (req.query.userEmail) {
			return db.get_vehicles_by_email(req.query.userEmail)
			.then(response => res.json(response));
		}
		
		if (req.query.userFirstStart) {
			return db.get_vehicles_by_email_letters(req.query.userFirstStart + "%")
			.then(response => res.json(response));
		}
	},

	getVehiclesByYear: (req, res, next) => {
		req.app.get("db").get_vehicles_by_year()
		.then(response => res.json(response)
    	.catch(err => console.log(err)))
	},

	changeVehicleOwner: (req, res, next) => {
		req.app.get("db").change_vehicle_owner([req.params.vehicleId, req.params.userId])
		.then(response => res.json(response)
		.catch(err = console.log(err)))
	},

	deleteVehicleOwnership: (req, res, next) => {
		req.app.get("db").delete_vehicle_ownership([req.params.vehicleId])
		.then(response => res.json(response)
		.catch(err => console.log(err)))
	},

	deleteVehicle: (req, res, next) => {
		req.app.get("db").delete_vehicle([req.params.vehicleId])
		.then(response => res.json(response)
		.catch(err => console.log(err)))
	}

}
