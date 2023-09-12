exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is create func of blogController."})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is read func of blogController."})
};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is delete func of blogController."})
};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is update func of blogController."})
};