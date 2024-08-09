// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: magic;
/*
* simple script to inject the shortcuts 
* parameters into an string that gets 
* saved as a HTML file after. By swaping
* the template content you can swap your 
* generatet wallpaper.
*/

let template = `
<!DOCTYPE html>
<html lang="de">

	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=0.7" />
    <title>Wallpaper</title>
	</head>

  <style>

		body {
			min-height: 100vh;
      margin: 0;
      background: #232323;
      font-family: monospace;
		}

    p {
      color: #ddd;
      padding: 2px;
      margin: 0px;
      text-shadow: -6px -6px 14px #232323;
    }

		.parent-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 420px repeat(3, 130px); 
      grid-template-areas: 
        "spacer spacer"
        "c1 c2"
        "c3 c3"
        "c4 c5";
      grid-gap: 28px; 
      padding: 28px;
		}

    .container {
      padding: 8px;
      background: #232323;
      border: none;
      border-radius: 16px;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: .2rem;
      text-align: center;
      outline: none;
      box-shadow: -6px -6px 14px rgba(0, 0, 0, .7),
              -6px -6px 10px rgba(0, 0, 0, .5),
              6px 6px 8px rgba(0, 0, 0, .075),
              6px 6px 10px rgba(255, 255, 255, .15);
    }
    #spacer {
      grid-area: spacer;
    }
    #card-small-a {
      grid-area: c1;
    }
    #card-small-b {
      grid-area: c2;
    }
    #card-medium-a {
      grid-area: c3;
    }
    #card-small-c {
      grid-area: c4;
    }
    #card-small-d {
      grid-area: c5;
    }
    .container .content {
      padding: 1rem;
    }

	</style>
</head>
    
<body>
    <div class="parent-container">
    
      <div id="spacer"></div>
      
      <div class="container" id="card-small-a"> 
        <div class="content">
          <p> Todays temperature:<br>${args.shortcutParameter[0]} </p>
        </div>
      </div>
    
      <div class="container" id="card-small-b"> 
        <div class="content">
          <p> ${args.shortcutParameter[1]} </p>
        </div>
      </div>
    
      <div class="container" id="card-medium-a">
        <div class="content">
          <p> ${args.shortcutParameter[2]} </p>
        </div>
      </div>
        
      <div class="container" id="card-small-c"> 
        <div class="content">
          <p>Arguments passed:</p>
          <p>${args.shortcutParameter.length}</p>
        </div>
      </div>
    
      <div class="container" id="card-small-d"> 
        <div class="content">
          <img 
          src="${args.shortcutParameter[3]}"
          width="100"
          >
        </div>
      </div>
    
    </div>
</body>

</html>
`
// FileManager
// .local()
// .writeString(
//     "background-grid.html",
//     template
// )
// console.log(template)
return template

