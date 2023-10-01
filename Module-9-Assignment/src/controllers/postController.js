exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is create func of postController."})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is read func of postController."})
};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is delete func of postController."})
};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is update func of postController."})
};