//=>>require's
  const express = require('express');
  const router = require('./routers');
  //const bodyParser = require('bodyParser');
//=>>def
  const app = express();
  const PORT = 3333;
//=>>middlewares
  app.use(express.json());
  app.use(router);

//=>>mainRouter
  app.listen(PORT, ()=>{
    console.log('server running in port '+PORT);
  });
