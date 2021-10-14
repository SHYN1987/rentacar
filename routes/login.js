const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
var User = require('../database/loginModel')

passport.serializeUser( (user, done) =>{
    done(null, user.id)
});

passport.deserializeUser( (id, done) =>{
    User.findById(id, (err, user) =>{
        done(err, user)
    })
});

passport.use(new localStrategy({
    passReqToCallback: true,
    usernameField: 'email',
    passwordField: 'password',
    session:true, 
    failureRedirect: '/login?error=true',
    failureFlash: true
    },
    function(req, email, password, done){
        let loginTry;
        User.findOne({email:email}, function(err, user){
             
            if(!user){
                return done(null, false, req.flash('message', "Pogresan Email"));
            };
            
            loginTry = bcrypt.compareSync(password, user.password);
            if(err){
                console.log("Error: " +err);
            };

            if(!user){
                return done(null, false, req.flash('message', "Pogresan Email ili Password"))
            };

            if(!loginTry){
                console.log("Pogresan Password");
                return done(null, false, req.flash('message', "Pogresan Password"))
            };
            console.log("User is in")
            return done(null, user)
            
        })

    }
    
));



router.get('/login', (req,res) =>{
    res.render('login', {message: req.flash('message')});
});

router.post('/login', 
    passport.authenticate('local', {failureRedirect:'/login?error=true', failureFlash:true}),
    function(req, res){
        connectEnsureLogin.ensureLoggedIn()
        res.redirect('/')
    }
);

router.get('/register', (req, res) =>{
    res.render('register')
});

router.post('/register', async(req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        User.create({
            ime: req.body.ime,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    }catch{
        res.redirect('/register')
        console.log("Error")
    }
})

router.delete('/logout', (req, res) =>{
    req.logOut()
    console.log('User is logged out')
    res.redirect('login')
})


module.exports = router