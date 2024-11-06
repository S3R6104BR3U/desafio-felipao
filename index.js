
let heros = ['Felipão:11150', 'Renan:1200', 'Juliana:7000', 'Michele:9999', 'Diogo:7953', 'Venilton:2854', 'Camila:999', 'Gleyson:8620']

function printClassHero(name, nivel) {
    console.log(`O Herói de nome ${name} está no nível de ${nivel}`)
}

for (let i = 0; i < heros.length; i++) {
   let [name, xp] = heros[i].split(':')
   xp = parseInt(xp)

   if(xp < 1000) {
    printClassHero(name, 'Ferro')
   }
   else if(xp >= 1001 && xp <= 2000) {
    printClassHero(name, 'Bronze')
   }
   else if(xp >= 2001 && xp <= 5000) {
    printClassHero(name, 'Prata')
   }
   else if(xp >= 5001 && xp <= 7000) {
    printClassHero(name, 'Ouro')
   }
   else if(xp >= 7001 && xp <= 8000) {
    printClassHero(name, 'Platina') 
   }
   else if(xp >= 8001 && xp <= 9000) {
    printClassHero(name, 'Ascendente')
   }
   else if(xp >= 9001 && xp <= 10000) {
    printClassHero(name, 'Imortal')
   }
   else if(xp > 10001) {
    printClassHero(name, 'Radiante')
   }
}






