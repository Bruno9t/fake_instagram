var express = require('express');
var router = express.Router();

const { Publication, User, Comment }  = require('../models')

const moment = require('moment')
moment.locale('pt')

const auth = require('../middlewares/auth')

const path = require('path')
const multer = require('multer')

const registerController = require('../controllers/registerController')
const loginController = require('../controllers/loginController')

const postController = require('../controllers/postController')
const commentController = require('../controllers/commentController')

/* GET home page. */

// Home
router.get('/home',auth, async function(req, res, next) {
  const listaDePublications = await Publication.findAll({
    include: [
      {
        model: User,
        as: "user",
        required: true,
      },
      {
        model:Comment,
        as:'comments',
      }
    ],
  });


  res.render('index', { title: 'Express',publications:listaDePublications, moment});
});



// Registro
router.get('/registro', function(req, res, next) {
  res.render('auth/register');
});

router.post('/registro',registerController.store);

// Login
router.get('/', function(req, res, next) {

  res.render('auth/login');
});

router.post('/',loginController.verify)

let storage = multer.diskStorage({
  destination(req,file,cb){
    cb(null,'public/img/posts')
  },
  filename(req,file,cb){
    cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
  }
})

let upload = multer({storage:storage})


//Publications
router.get('/publication/create',auth,postController.index)

router.post('/publication/create',upload.any(),postController.store)

//Comments

router.post('/comment/:id/create',commentController.store)



module.exports = router;
