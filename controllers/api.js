const Point = require('../models/point');
module.exports.getData = async (req,res) => {
    try{
        const doc = await Point.find();
        res.json({
            success: true,
            status: 200,
            data: doc
        });
    }catch(err){
        const error = {
            msg: err,
            status: 500,
        }
        next(error);
    }
}