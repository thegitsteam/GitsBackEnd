var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.send('GET AT law')
});
router.post('/',function(req,res){
	res.send('post at admin')
});
router.get('/:id',function(req,res){
	if(req.params.id){
		res.send('get for id' + req.params.id)
	}
	else{
		res.send('no id')
	}
});
router.post('/:id',function(req,res){
	if(req.params.id){
		res.send('post for id' + req.params.id)
	}
	else{
		res.send('no id')
	}
});
router.delete('/:id',function(req,res){
	if(req.params.id){
		res.send('delete for id' + req.params.id)
	}
	else{
		res.send('no id')
	}
});
router.put('/:id',function(req,res){
	if(req.params.id){
		res.send('put for id' + req.params.id)
	}
	else{
		res.send('no id')
	}
});


module.exports = router;