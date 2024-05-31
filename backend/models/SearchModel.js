import mongoose from "mongoose";

const ebayDataSchema = new mongoose.Schema({
    warning: {
      warning_type: { type: String },
      warning_msg: { type: String }
    },
    success: { type: Boolean },
    average_price: { type: Number },
    median_price: { type: Number },
    min_price: { type: Number },
    max_price: { type: Number },
    results: { type: Number },
    total_results: { type: Number },
    pages_included: { type: Number },
    products: [{  }]
});

const searchSchema = new mongoose.Schema({
    search_name: { type: String, default: '' },
    keywords: { type: String, required: true },
    excluded_keywords: { type: String, default: '' },
    max_search_results: { type: Number, required: true },
    userId: { type: String, required: true },
    ebayData: ebayDataSchema
});


const Search = mongoose.model('search', searchSchema);

export default Search;
