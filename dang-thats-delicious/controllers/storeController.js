const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
    console.log(req.name);
    // req.flash('error', `Something happened, we were unable to create the store. Please contact the site owner.`);
    // req.flash('warning', `This is not supported on this site, please stop.`);
    // req.flash('info', `Hmm... This is odd, but we are not sure what is happening. Please try again in a few minutes or use a better browser.`);
    res.render('index');
};

exports.addStore = (req, res) => { 
    res.render('editStore', { title: 'Add Store 🏔' });
};

exports.createStore = async (req, res) => {
    const store = await (new Store(req.body)).save();
    await store.save();
    req.flash('success', `You successfully created ${store.name}! Would you care to leave a review?`);
    res.redirect(`/store/${store.slug}`);
};