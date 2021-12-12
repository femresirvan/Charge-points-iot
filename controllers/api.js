const Point = require('../models/point');
module.exports.getData = async (req, res) => {
    try {
        // const filter = {'city':req.query.city, 'name':req.query.name};
        let state;
        const doc = await Point.find(req.query);
        let result = [];
        let a = 0;
        
        if (req.query.state == 'free') {
            for (var i = 0; i < doc.length; i++) {
                for (var j = 0; j < doc[i].slots.length; j++) {
                    if (!doc[i].slots[j].isFull) {
                        state = true;
                        break;
                    } else state = false;
                }
                doc[i].state = state;
                if (doc[i].state) {
                    result[a] = doc[i];
                    a++;
                }
            }
        }
        else if (req.query.state == 'full') {
            for (var i = 0; i < doc.length; i++) {
                for (var j = 0; j < doc[i].slots.length; j++) {
                    if (!doc[i].slots[j].isFull) {
                        state = true;
                        break;
                    } else state = false;
                }
                doc[i].state = state;
                if (!doc[i].state) {
                    result[a] = doc[i];
                    a++;
                }
            }
        }
        else result = doc;
        console.log(result.length);
        res.json({
            success: true,
            status: 200,
            data: result
        });
    } catch (err) {
        const error = {
            msg: err,
            status: 500,
        }
        next(error);
    }
}
module.exports.insertData = async (req, res) => {
    try{
        const station = new Point();
        const result = await station.save(req.body);
        res.json({
            success: true,
            msg:"New station has inserted succesfully."
        });
    }catch(err){
        const error = {
            msg:err,
            status:500 // validation errorlara vakit yetmedi :/ joi kullanılabilir.
        }
    }
    
    
}