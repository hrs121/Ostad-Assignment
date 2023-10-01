exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is create func of userController."})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is read func of userController."})
};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is delete func of userController."})
};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is update func of userController."})
};