const express= require('express');
const fs= require('fs')
const path=require('path')
const data = fs.readFileSync(path.resolve(__dirname,'data.json'),'utf-8');
const users=JSON.parse(data).users;

exports.createUser=(req,res)=>{

    const user=req.body;
    users.push(req.body);
    res.json(user);

};

exports.getAllUsers=(req,res)=>{

    res.json(users);

};

exports.getUser=(req,res)=>{
    const id=req.params.id;
    const user=users.find(p=>p.id===+id)
    res.json(user);

};

exports.updateUser=(req,res)=>{
    const id=req.params.id;
    const user=users.find(p=>p.id===+id);
    const uuser={...user,["title"]:req.body.title};
    const index=users.indexOf(user);
    users.splice(index,1,uuser);
    
    res.json(uuser);
};

exports.deleteUser=(req,res)=>{
    const id=req.params.id;
    const user=users.find(p=>p.id===+id);
    const index=users.indexOf(user);
    const del=users.splice(index,1);
    res.json(del);
    
};