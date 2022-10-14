<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="16x16" href="https://cdn-icons-png.flaticon.com/512/4200/4200126.png">
    <link href="CSS/CV.css" rel="stylesheet">
    <link href="CSS/navigation.css" rel="stylesheet">
    <title>Drawing</title>
</head>
<body>

    <nav role="navigation">
        <div id="menuToggle">
      
          <input type="checkbox" />
      
          <span></span>
          <span></span>
          <span></span>
          
          <ul id="menu">
            <a href="index.php"><li>Home</li></a>
            <a href="Drawing.php"><li>Drawing</li></a>
            <a href="Traveling.php"><li>Traveling</li></a>
            <a href="Project.php"><li>Projects</li></a>
          </ul>
        </div>
    </nav>
    
    <div class="header">
        <div class="info">
            <h4>WILD SPIRIT</h4>
            <h1>MY FAVOURITE HOBBY</h1>
            <div class="meta">
                By Inès Echaroux
            </div>
            <br/>
            <br/>
            <span class="scroll-btn">
                <span class="mouse">
                    <span>
                    </span>
                </span>
                <p>scroll me</p>
            </span>
        </div>
    </div>

    <section class="content">
        <div class="wrap">
            <div class="tile"> 
                <img src='CSS/Images/HomeTile/tile1.png'/>
                <div class="text">
                    <h1>RHIFF</h1>
                    <h2 class="animate-text">My amateur manga</h2>
                    <p class="animate-text">In my free time I am actually drawing a manga, just for fun. At first, it was just to see
                        if I could make it and finally it ended up being something I enjoy doing. It follows the story of three 
                        youngsters who fallen into a strange world. The story is about they come back to Earth and how it goes.
                        Of course it's way more complicated than that so if you are interested click on the button ! </p>
                        <a href="attente.php"><button class="animate-text" ><span id="readMore">Read More</span></button></a>
                </div>
            </div>
            
            <div class="tile"> 
                <img src='CSS/Images/HomeTile/tile2.png'/>
                <div class="text">
                    <h1>FANART</h1>
                    <h2 class="animate-text">What I enjoy drawing</h2>
                    <p class="animate-text"> Since I am a child, I am a huge fan of anime and manga. As you can see if you scroll
                        down a little bit, it is what I enjoy drawing the most. So, most of the time, when I watch or read
                        one, I draw at the end, my favourite character. I like drawing them with my own style and play with 
                        their chara-design, colors and contrast. 
                    </p>
                </div>
            </div>
                
            <div class="tile"> 
                <img src='CSS/Images/HomeTile/tile3.png'/>
                <div class="text">
                    <h1>HOW I STARTED</h1>
                    <h2 class="animate-text">Why am I drawing and since when</h2>
                    <p class="animate-text">When people ask me since when I am drawing, I like to quote my dad. "Since she's born 
                        I always saw her with pencils in her hands. She could draw before she could walk !" - My dad. Furthermore, I don't 
                        only draw anime style, I draw portrait, realistic style and semi-realistic. I am mostly focused on digital 
                        painting however I am still really fond of traditional art. I have multiple sketchbook that I love to doodle in.
                    </p>
                </div>
            </div>
        </div>
        
        <h2 id="cen">Gallery</h2>
        <p id="spec">
            Here is a sample of what I can draw
        </p>

        <div class="wrap">
            <div class="galery-item">
                <img src='CSS/Images/Drawing/Nishinoya.png'/>
                <div class="text-holder">
                    <h3>Nishinoya Yuu</h3>
                    <p><b>Fan art</b>, Haikyuu - 15 Aug. 2022</p>
                </div>
            </div>
            <div class="galery-item">
                <img src='CSS/Images/Drawing/Erza.png'/>
                <div class="text-holder">
                    <h3>Erza Scarlet</h3>
                    <p><b>Fan art</b>, Fairy Tail - 11 Aug. 2022</p>
                </div>
            </div>
            <div class="galery-item">
                <img src='CSS/Images/Drawing/Itto.png'/>
                <div class="text-holder">
                    <h3>Arataki Itto</h3>
                    <p><b>Fan art</b>, Genshin Impact - 09 Aug. 2022</p>
                </div>
            </div>
        </div>
        <div class="wrap" id="noMT">
            <div class="galery-item">
                <img src='CSS/Images/Drawing/Epsilon+Fleur2.png'/>
                <div class="text-holder">
                    <h3>Epsilon's flower</h3>
                    <p><b>Original Character</b>, Rhiff - 14 Nov. 2021</p>
                </div>
            </div>
            <div class="galery-item">
                <img src='CSS/Images/Drawing/Jahan+Fleurs.png'/>
                <div class="text-holder">
                    <h3>Jahan's flower</h3>
                    <p><b>Original Character</b>, Rhiff - 03 Nov. 2021</p>
                </div>
            </div>
            <div class="galery-item">
                <img src='CSS/Images/Drawing/Azalée+Fleurs.png'/>
                <div class="text-holder">
                    <h3>Azalée's flower</h3>
                    <p><b>Original Character</b>, Rhiff - 02 Nov. 2021</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>