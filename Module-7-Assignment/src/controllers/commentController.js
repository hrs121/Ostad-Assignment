exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is create func of commentController."})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is read func of commentController."})
};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is delete func of commentController."})
};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is update func of commentController."})
};