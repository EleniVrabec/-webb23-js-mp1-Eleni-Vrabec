const wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.style.width = "1200px";
wrapper.style.height = "1000px";
/* wrapper.style.border="1px solid black"; */
wrapper.style.margin = "100px";

// stil av row som byter storlek och färg

for(let i = 1; i <=5; i++){
    const colorRow = document.createElement("p");
    wrapper.appendChild(colorRow);
    colorRow.innerText = `Rad ${i}`;
    colorRow.style.textAlign = "center";
    colorRow.style.margin = "50";
 
    const fontSize = 5 + (i*8) ;
    colorRow.style.color = "#6D74F2";
    colorRow.style.fontWeight = "bold";
    colorRow.style.fontSize = `${fontSize}px`;

    const pHue = 66 + i*26;
    const pSaturation = 80;
    const pLightness = 85;
    colorRow.style.backgroundColor = `hsl(${pHue}, ${pSaturation}%, ${pLightness}%)`;
}

//_______________________________________________________________________________________________________________

// tre columner 
// main box
const box = document.createElement("div");
wrapper.appendChild(box);
box.style.width = "1200px";
box.style.height = "450px";
box.style.border = "1px solid black";
box.style.margin = "0px";
box.style.display = "flex";
box.style.justifyContent = "space-evenly";

// arrays för column innehål
const column1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const column2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const column3 = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio" ];

// stil av columnen 
for( i = 0; i <= 2; i++){
    const columns = document.createElement("article");
    box.appendChild(columns);
    columns.style.flexDirection = "column"; 
    columns.style.width = "80px";
    columns.style.height = "300px";
    columns.style.float = "left";
    columns.style.margin = "50px";
    columns.style.padding = "20px";
    columns.style.backgroundColor = "#ACB0F2";
    columns.style.display = "flex";
    columns.style.alignItems = "center";

   // tillägg p element som row i varje column
    for( let j = 0; j < column1.length; j++){
        const row = document.createElement("p");
        columns.appendChild(row);
        row.style.height = "30px"
        row.style.width = "80px";
        row.style.margin = "0px";
        row.style.fontSize = "20px";

    // tillläg innehåll från arrays variabel till varje column 
        if(i === 0 ) {
            row.innerText = column1[j];
            if ( j % 2 === 0){
                row.style.backgroundColor = "black";
                row.style.color = "white";
            }
            else{
                row.style.backgroundColor = "white"
            }
        
            if( j === 4 ){
                row.style.backgroundColor="transparent";
            }
        }
        else if (i === 1) {
            row.innerText = column2[j];
            row.style.textAlign = "center";
            
            if ( j % 2 === 0){
                row.style.backgroundColor = "white";
                row.style.color = "black";
            }
            else{
                row.style.backgroundColor = "black"
                row.style.color = "white"
        
        }

            if( j === 1 ){
                row.style.backgroundColor = "transparent";
            }

        }
        else {
            row.innerText = column3[j];
            row.style.textAlign = "right";
            if ( j % 2 === 0){
                row.style.backgroundColor = "black";
                row.style.color = "white";
            }else{row.style.backgroundColor = "white"}

            if( j === 5 ){
                row.style.backgroundColor="transparent";
            }
        }
    
    }
    
}




