import Search from "../models/SearchModel.js";

export const getSearches = async (req,res) => {
    try {
        const searches = await Search.find();
        res.status(200).json(searches);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error);
    }
}

export const getSearch = async (req, res) => {
    try {
        const search = await Search.findById(req.params.id);
        if (!search) {
            return res.status(404).json({ message: 'Search not found' });
        }
        res.status(200).json(search);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error);
    }
}


export const createSearch = async (req,res) => {
    try {
        console.log(req.body);
        const search = await Search.create(req.body);
        res.status(200).json(search);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error);
    }
}

//  /api/searches/:id
export const deleteSearch = async (req,res) => {
    try {
        await Search.findByIdAndDelete(req.params.id);
        res.status(200).json({  message: 'successfully deleted',
                                id: req.params.id })
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error);
    }
}

export const updateSearch = async (req, res) => {
    try {
        const updatedSearch = await Search.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            message: 'successfully updated',
            search: updatedSearch
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error);
    }
}