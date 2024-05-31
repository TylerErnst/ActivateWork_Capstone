import mongoose from "mongoose";

const searchSchema = new mongoose.Schema({
    keywords: { type: String, required: true },
    excluded_keywords: { type: String, default: '' },
    max_search_results: { type: Number, required: true },
    // userId: { type: String, required: true }
});

const Search = mongoose.model('search', searchSchema);

export default Search;
