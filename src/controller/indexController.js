
class IndexController {

    testing(req, res){
        res.send("App is firing!");
    }
}

module.exports = new IndexController();