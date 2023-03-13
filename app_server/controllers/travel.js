const { restart } = require("nodemon")

/*GET travel view */
const travel=(req, res)=> {
        res.render('travel',{title:'Travlr Getawayss'});
};
module.exports = {
    travel
};