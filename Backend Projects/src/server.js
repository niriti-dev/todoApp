// import * as httpClass from './httpClass';
import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from 'url';



const [PORT, HOSTNAME] = [3000, '127.0.0.1'];


// goal: get access to the config.json file which is in the same local directory 
// method: use series of modules: path, fileURLtoPath so that this code work 
//         reliably across different OS systems  

const fileURL = import.meta.url  
const __filename = fileURLToPath(fileURL)
// gives me the path to my local directory 
const __dirname = path.dirname(__filename); 
// gives me the path to config.json 
const configFile = path.join(__dirname, 'config.json');



fs.readFile(configFile, 'utf8', (err, data)=> {

    if (err) {
        console.log(err.message);
        return;
    }

    const configObject = JSON.parse(data);

    const { root_directory, redirect_map } = configObject //destruct 
    const rootDirFull = path.join(__dirname, "..", root_directory); // go up one directory 
    console.log(rootDirFull)

    // const myServer = new webLib.HTTPServer(rootDirFull, redirectMap);
    // myServer.server.listen(PORT, HOSTNAME);
});

 
