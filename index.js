
const fs = require('fs');
const path = require('path'); //para acceder a  rutas de archivos y directorios;
const fetch = require('fetch');//Obtener el contenido de la URL.
const fetchUrl = require("fetch").fetchUrl;

let readPath = process.argv[2];
readPath = path.resolve(readPath)
readPath = path.normalize(readPath)




//leer el archivo que el usuario necesita evaluar 
const readFile = (fileName, type) => {
    return new Promise ((resolve, reject) =>{
      fs.readFile(fileName, type, (error, content)=>{
        if(error){
          reject(error);
        }
        else{
          resolve(content);
        }
      }
      )
    })
  }
  
  readFile(readPath(), 'utf8')
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  }) 
  
  
  


const getUrl = (url) => {
  return new Promise ((resolve , reject) => {
    fetchUrl(url, (error, meta, body) => {
      if (meta){
        if(meta.status == 200) {
          resolve(meta.status.toString());
          
        }
      }
      else {
        reject(error);
      }

    })
  })
}
let url = 'htpps://www.google.com/'

getUrl(url)

.then(res => {
  console.log("el estado de", url , "es:", res);
})
.catch(error => {
  console.log(error);
});











