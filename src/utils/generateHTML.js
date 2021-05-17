const generateEngineerHTML = (engineer) => {
  return `<div >
        
  <div class="card-body">
    <div class="card-title bg-primary bg-gradient p-4 rounded-top m-0">
      <h5>Engineer</h5>
      <h6>${engineer.name}</h6>
    </div>
    
    <div class="px-3 py-4 border bg-light">
    <p class="card-text border p-2 m-0">Id:${engineer.id}</p>
    <p class="card-text border p-2 m-0">email:${engineer.email}</p>
    <p class="card-text border p-2 m-0">github: ${engineer.github}</p>
  </div>
    
  </div>  
</div> `;
};
const generateManagerHTML = (manager) => {
  return `<div >
        
  <div class="card-body">
    <div class="card-title bg-primary bg-gradient p-4 rounded-top m-0">
      <h5>Manager</h5>
      <h6>${manager.name}</h6>
    </div>
    
    <div class="px-3 py-4 border bg-light">
    <p class="card-text border p-2 m-0">Id:${manager.id}</p>
    <p class="card-text border p-2 m-0">email:${manager.email}</p>
    <p class="card-text border p-2 m-0">officeNumber: ${manager.officeNumber}</p>
  </div>
    
  </div>  
</div> `;
};
const generateInternHTML = (intern) => {
  return `<div >
        
  <div class="card-body">
    <div class="card-title bg-primary bg-gradient p-4 rounded-top m-0">
      <h5>Intern</h5>
      <h6>${intern.name}</h6>
    </div>
    
    <div class="px-3 py-4 border bg-light">
    <p class="card-text border p-2 m-0">Id:${intern.id}</p>
    <p class="card-text border p-2 m-0">email:${intern.email}</p>
    <p class="card-text border p-2 m-0">school: ${intern.school}</p>
  </div>
    
  </div>  
</div> `;
};

const generateHTML = (team) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <link rel="stylesheet" type="text.css" href="./style.css">
      <title>Weather Dashboard</title>
    </head k>
    <body>
      <header class="bg-danger text-light text-center p-4" >
        <h1 >My Team</h1>
      </header>
      <main class=" m-5 d-flex justify-content-evenly flex-wrap">
      ${team}
      </main>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
      crossorigin="anonymous"
    ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    
  </body>
</html>`;
};

module.exports = {
  generateHTML,
  generateEngineerHTML,
  generateInternHTML,
  generateManagerHTML,
};
