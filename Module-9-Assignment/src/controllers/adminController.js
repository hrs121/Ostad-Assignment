exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is create func of adminController."})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is read func of adminController."})
};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is delete func of adminController."})
};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is update func of adminController."})
};