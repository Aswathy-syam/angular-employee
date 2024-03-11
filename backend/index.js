// steps to generate json-server

// import json-server

const jsonServer=require('json-server')

// create our own server to run json file

const empServer=jsonServer.create()

// generate a middleware to use in json server

const middleware=jsonServer.defaults()

// set up path for db.json

const router=jsonServer.router("db.json")

// set up port

const port=3000

// use middleware and router in server

empServer.use(middleware)
empServer.use(router)

// server listen on run to request

empServer.listen(port,()=>{
    console.log('employee portal server started at port no'+port);
})

