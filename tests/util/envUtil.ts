import * as dotenv from 'dotenv';

//decide the env file 
let env = process.env.ENV || 'qa'; //dev or qa 

//fileload 
dotenv.config({path:`.env.${env}`})


function required(key:string):string{

    let data = process.env[key];

    if(!data){
        throw new Error(`Missing env keyname : ${key}`)
    }

    return data;

}

type EnvConfig= {
    baseurl:string,
    username:string,
    password:string
}



export let ENV :EnvConfig =  {
    baseurl:required('BASEURL'),
    username:required('USERNAME'),
    password:required('PASSWORD')
}


