<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="16x16" href="https://cdn-icons-png.flaticon.com/512/4200/4200126.png">
    <link rel="stylesheet" href="CSS/attente.css"/>
    <title>Document</title>
</head>

<body>
  <div class="wrapper">  
    <main class="content">
      <h1>COMING SOON!</h1>
  
      <div class="countdown">
        <div class="countdown__days">
          <div class="number"></div>
          <span class>Jours</span>
        </div>
  
        <div class="countdown__hours">
          <div class="number"></div>
          <span class>Heures</span>
        </div>
        
        <div class="countdown__minutes">
          <div class="number"></div>
          <span class>Minutes</span>
        </div>
  
        <div class="countdown__seconds">
          <div class="number"></div>
          <span class>Secondes</span>
        </div>
      </div>
  
      <p>Notre site est en cours de construction. Nous serons bientôt là<br/>avec notre nouveau site génial.</p>
      <form>
        <input type = "button" value = "Go Back"  onclick = "history.go(-1)">
      </form> 
    </main>
  </div>
  
</body>
<script type="text/javascript" src="JavaScript/attente.js"></script>
</html>