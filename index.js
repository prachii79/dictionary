const inField = document.querySelector("input")
const btn = document.querySelector("button")
const list_container= document.getElementById("listContainer")
// const speakEl = document.getElementById("speaker");

 async function any(){
    try{
        list_container.innerHTML = '';
        const dicObj = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inField.value}`);
        const dicObjJSON = await dicObj.json()
        dicObjJSON.forEach(el => {
            const meanArray = el.meanings
            meanArray.forEach(mean => {
                const defsArray = mean.definitions
                //console.log(defsArray)
                defsArray.forEach(def => {
                    const defin = def.definition
                    let li = document.createElement("li");
                    li.innerText = defin;
                    list_container.appendChild(li);
                })
            })  
        })     
    } catch(err){
        console.log(err)
    }
}

// async function pronounce(){
//     try{
//         console.log("clicked")
//         const dicObj = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inField.value}`);
//         const dicObjJSON = await dicObj.json()
//         console.log(dicObjJSON);

//     }
//     catch(err){
//         console.log(err);
//     }
//     //const prAPI = fetch()
// }

btn.addEventListener("click", any)

//speakEl.addEventListener("click", pronounce)