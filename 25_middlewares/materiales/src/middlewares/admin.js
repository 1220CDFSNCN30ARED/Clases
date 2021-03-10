const adminers = ['Ada','Greta','Vim','Tim','Tito','Ani'];

module.exports = (req,res,next) => {

    adminers.forEach(user => {
        if(user == req.query.user){
            next()
        }
        
    });
    res.send('No tenes permisos')
   

}