exports.myMiddleware = (req, res, next) => {
    req.name = 'Isaac';
    res.cookie('name', 'Isaac is a bodacious software programer. You should be his friend 😎', { maxAge: 9000 })
    next();
};

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');
};