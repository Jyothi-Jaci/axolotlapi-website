async function b(a){return(await(await fetch(a)).text()).trim().split("\n");}async function getFacts(){return b("https://raw.githubusercontent.com/AxolotlAPI/data/main/facts.txt");}async function getPictures(){return b("https://raw.githubusercontent.com/AxolotlAPI/data/main/pictures.txt");}function getRandomFromList(a){return a[Math.floor(Math.random()*a.length)];}