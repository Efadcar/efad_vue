// API calls main url
const API_URL = process.env.VUE_APP_ROOT_API;

// API url's prefix
const PREFIX = process.env.VUE_APP_API_PREFIX;

// API version
const VERSION = process.env.VUE_APP_API_VERSION;

// generate api urls [Authentication required]
function apiUrl(name) {
	return API_URL + "/" + PREFIX + "/" + VERSION + "/" + name;
}

// API end-points
const END_POINTS = {
	explore: {
		car_brands: apiUrl("cars_brands"),
		car_models: apiUrl("cars_models"),
		car_types: apiUrl("cars_types"),
		get_results: apiUrl("explore"),
		cars_colors: apiUrl("cars_colors"),
	},
	countries: apiUrl("countries"),
	auth: {
		register: apiUrl("register"),
		login: apiUrl("login"),
	}
};

export default END_POINTS;