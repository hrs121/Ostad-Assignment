exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is create func of messageController."})
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is read func of messageController."})
};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is delete func of messageController."})
};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"This is update func of messageController."})
};