var fs = require('fs')
function getFileByPath(fpath){
    var promise = new Promise(function(resolve,reject){
        fs.readFile(fpath,'utf-8',(err,dataStr) =>{
            if(err) reject(err)
            resolve(dataStr)
        })
    })
    return promise;
}

getFileByPath("./t.js")
.then( data=>{
    console.log("1-----"+data)
    return getFileByPath("./t.js")
})
.then(str=>{
    console.log(str)
    return getFileByPath("./t.js")
})
.then(str=>{
    console.log(str)
})

// getFileByPath("./t.js")
// .then( data=>{
//     console.log("2-----"+data)
// })

// getFileByPath("./t.js")
// .then( data=>{
//     console.log("3-----"+data)
// })