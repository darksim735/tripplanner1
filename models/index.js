var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner1');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Schema = mongoose.Schema;
var Place, Hotel, ThingToDo, Restaurant;

var placeSchema = new Schema({
	address: String,
	city: String,
	state: String,
	phone: String,
	location: [Number]
});

var hotelSchema = new Schema({
	name: String,
	place: String,
	num_stars: Number,
	amenities: [String]
});

var thingToDoSchema = new Schema({
	name: String,
	place: String,
	age_range: String
});

var restaurantSchema = new Schema({
	name: String,
	place: String,
	cuisine: [String],
	price: Number
});

Place = mongoose.model('Place', placeSchema);
Hotel = mongoose.model('Hotel', hotelSchema);
ThingToDo = mongoose.model('ThingToDo', thingToDoSchema);
Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {"Place": Place, "Hotel": Hotel, "ThingToDo": ThingToDo, "Restaurant": Restaurant};