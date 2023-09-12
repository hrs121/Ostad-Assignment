exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is create func of productController."})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is read func of productController."})
};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is delete func of productController."})
};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is update func of productController."})
};