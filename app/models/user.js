exports.definition = {
	config: {

		adapter: {
			type: "properties",
			collection_name: "user"
		},
		idAttribute : 'loginUser'
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};