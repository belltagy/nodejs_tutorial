const {readFile, writeFile} = require('fs');
const util = require('util')
const readFilepromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8',(err, data) =>{
//             //setTimeout(()=>{return },1000)
//             if (err){
//                 reject(err)
//             }
//             else
//             {
//                 resolve(data)
//                 console.log(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

const start = async() =>{
    try{
        const first = await readFilepromise('./content/first.txt', 'utf8');
        const second = await readFilepromise('./content/second.txt', 'utf-8');
        await writeFilePromise('./content/result-mind-grenade.txt',`this is file 1${first} ${second}`)
        console.log(first, second)
        }
    catch (error){
        console.log(error)
    }
}
start()