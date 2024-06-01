import express from "express";
import { getSearches, getSearch, createSearch, deleteSearch, updateSearch } from "../controllers/searchController.js";

// /api/searches
const router = express.Router();

router.get('/', getSearches);
router.get('/:id', getSearch);

router.post('/', createSearch);

router.delete('/:id', deleteSearch)

router.patch('/:id', updateSearch)

export default router;