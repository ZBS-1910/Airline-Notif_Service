
const express = require('express');
const{ ServerConfig  } = require('./config');
const mailsender= require('./config/email.config')
const apiroutes=require('./routes');
const logger = require('./config/logger-config');
const { error } = require('./utils/common/error-response');
const app = express();

app.use('/api',apiroutes);

app.use (express.json());
app.use(express.urlencoded({express:true}));

app.listen(ServerConfig.PORT,async ()=>{
    console.log(`Server is Up and running on port ${ServerConfig.PORT}`);
    logger.info("Succefully started the server",{});

   try{
    const response=await mailsender.sendMail({
        from :ServerConfig.GMAIL_EMAIL,
        to:'zameer.ge19@gmail.com',
        subject:'Is the service working..?',
        content:'Yes its working'
    });
    console.log(response);
    }catch(error){
    console.log(error);
    }

}); //1.02hr