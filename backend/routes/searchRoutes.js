import express from "express";
import { getSearches, createSearch, deleteSearch } from "../controllers/searchController.js";

// /api/searches
const router = express.Router();

router.get('/', getSearches);

router.post('/', createSearch);

router.delete('/:id', deleteSearch)

export default router;