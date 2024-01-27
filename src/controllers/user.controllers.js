const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const users = await User.findAll()
    return res.json(users)
});

const create = catchError(async(req, res) => {
    const { firstName, lastName, email, password, birthday } = req.body;
    const newBody = { firstName, lastName, email, password, birthday };
    const users = await User.create(newBody)
    return res.json(users)
})
const getOne = catchError(async(req, res) =>{
    const {id} = req.params;
    const users = await User.findByPk(id)
    if(!users) res.sendStatus(404)
    return res.json(users)
})
const destroy = catchError(async(req,res)=>{
    const {id} = req.params;
    const users = await User.destroy({where:{id}});
    if(!users) res.sendStatus(404)
    return res.send('User deleted').sendStatus(204)
})
const update = catchError(async(req,res)=>{
    const {id} = req.params;
    const { firstName, lastName, email, password, birthday } = req.body;
    const newBody = { firstName, lastName, email, password, birthday };
    const users = await User.findByPk(id);
    if(!users) res.sendStatus(404)
    const userUpdate = await User.update(
        newBody,
        { where: {id}, returning: true }
    )
    return res.json(userUpdate[1][0])
})

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update

}