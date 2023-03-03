import { IUseTemplate } from "../../interfaces";

const previewPage = (options: IUseTemplate.Options) => {

  return (`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Builder: Preview</title>
  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <style>
    /*Component Styles*/
    ${options?.css}
    /*END Comp Styles*/
  </style>
</head>

<body>
  <div class="App" style="background-color: #DDDDDD">
    <nav class="navbar bg-dark" style="background: black!important;
        height: 50px">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 text-white">
          <i class="fa-solid fa-code pe-2 text-white"></i>
          Builder
        </span>
        <a href='http://localhost:3000/components/${options.name.toLowerCase()}' class="text-white pe-2" style="text-decoration: none;">
          <i class="fa-solid fa-cube pe-1"></i>
          Component Mode
        </a>
      </div>
    </nav>
    <div class='d-flex'>
      <div style="height: calc(100vh - 50px)"></div>
      <div class='d-flex flex-column justify-content-between' style='width: 100%'>
        <div class='container-fluid p-3'>
          <div class='row'>
            <div class='col'>
              <h2>Preview: ${options.name}</h2>
              <div class='col pt-4'>
                <!--Component HTML-->
                ${options?.html}
                <!--END Component HTML-->
              </div>
            </div>
          </div>
        </div>
        <div class='p-1 d-flex justify-content-center'>
          <small style='font-size: .75rem;'>Copyright 2023 Builder</small>
        </div>
      </div>
    </div>
  </div>
  <script src="https://kit.fontawesome.com/bc8edc6f62.js" crossorigin="anonymous"></script>
  <script>
       //Component scripts
       ${options?.scripts}         
  </script>
</body>
</html>
    `)
};

export default previewPage;
