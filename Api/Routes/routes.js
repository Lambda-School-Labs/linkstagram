//establish the oauth flow
module.exports =  app => { 

    app.get('/', (req, res) => {
        res.render('login')
    });
    
    //use passport to authenticate instagram
    app.get('/auth/instagram', passport.authenticate('instagram'));

    //provide a valid callback for successful authentication if not the user is taken back to /
    app.get('/auth/instagram/callback', passport.authenticate('instagram', {
        successRedirect: '/users',
        failure: '/'
    })); 

    //redirect to users profile? page
    app.use('/users', (req,res, next) => {
        if(!req.user){
        res.redirect('/')
        }
        next()
    });

    //store entire response in req.user we will take what we want to store from here in our passport instagram strategy
    app.get('/users', (req, res) => {
        res.json(req.user)
    });

    // users page, we are displaying what we want from req.user, mapping out the images as well.
    app.get('/users', (req, res) => {
        axios.get(req.user.media)
        .then(function (response) {
        const data = response.data.data;
        let user = req.user;
        user.images = data.map(img => img.images);
        res.render('instagram', user)  
        });
    });

}