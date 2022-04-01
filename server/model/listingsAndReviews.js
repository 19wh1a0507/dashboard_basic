const mongoose = require('mongoose')
const schema = mongoose.Schema()
module.exports = mongoose.model("planets", schema);
// const lAndR = schema({
//     listing_url: String,
//     name: String,
//     summary: String,
//     space: String,
//     description: String,
//     neighborhood_overview: String,
//     notes: String,
//     transit: String,
//     access : String,
//     interaction: String,
//     house_rules: String,
//     property_type: String,
//     room_type: String,
//     bed_type: String,
//     minimum_nights: String,
//     maximum_nights: String,
//     cancellation_policy: String,
//     last_scraped: Date,
//     calendar_last_scraped: Date,
//     first_review: Date,
//     last_review: Date,
//     accommodates: Decimal128,
//     bedrooms: Number,
// beds: Number,
// number_of_reviews: Number,
// bathrooms: Number,
// amenities: Array,
// price: Decimal128,
// security_deposit: Decimal128,
// cleaning_fee: Decimal128,
// extra_people: Decimal128,
// guests_included: Decimal128,
// images:{type: schema.Types.ObjectId,
// }
// host
// :
// Object
// address
// :
// Object
// availability
// :
// Object
// review_scores
// :
// Object
// reviews
// :
// Array
// })