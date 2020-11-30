// Feladatok

// 1.) Írj egy függvényt, aminek a visszatérési értéke az adott év 01.01. óta eltelt másodperceinek száma!
console.log('1.feladat');
function elapsedTimeInSeconds(year){
    const nowTime = new Date();
    const firstTime = new Date(`${year}-01-01`);
    const elapsedTime = ((nowTime.getTime()- firstTime.getTime())/1000);
    return (elapsedTime);
}
console.log(elapsedTimeInSeconds('2020'));

// 2.)Írj egy függvényt, aminek a visszatérési értéke az adott évben eddig eltelt munkanapok 
//(hétfő-péntek) száma!
console.log('2.feladat');
function elapsedTimeInWorkDays(){
    const nowTime = new Date();
    const year = nowTime.getFullYear();
    const endDay = nowTime.getDay();
    let startTime = new Date(`${year}-01-01`);
    const startDay = startTime.getDay();
    if (startDay === 0) startTime = new Date(`${year}-01-02`);
    if (startDay === 6) startTime = new Date(`${year}-01-03`);
    const elapsedDay = ((nowTime.getTime()- startTime.getTime())/1000/60/60/24);
    return (Math.floor(elapsedDay*5/7));
}
console.log(elapsedTimeInWorkDays());


// 3.)Írj egy függvényt, ami paraméterként egy Date objektumot kap, a visszatérési értéke pedig egy objektum 
// két tulajdonsággal, ami a következő formátumban tartalmazza a paraméterként kapott dátumot:

// short: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma, 
//     majd az idő a másodperc nélkül)
// long: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)
{
console.log('3.feladat');

function mh(num){
    if (num===0) return 'január';
    if (num===1) return 'február';
    if (num===2) return 'március';
    if (num===3) return 'április';
    if (num===4) return 'május';
    if (num===5) return 'június';
    if (num===6) return 'július';
    if (num===7) return 'augusztus';
    if (num===8) return 'szeptember';
    if (num===9) return 'október';
    if (num===10) return 'november';
    if (num===11) return 'december';
}


function F3(date){
    const obj = {
        short: date.getFullYear() + '. ' + mh(date.getMonth()).substring(0,3) + '. ' + date.getDate() + '. ' + date.toLocaleTimeString('hu').substring(0, date.toLocaleTimeString('hu').length - 3),
        long: date.getFullYear() + '. ' + mh(date.getMonth()) + ' ' + date.getDate() + '. ' + date.toLocaleTimeString('hu')
    }; 
    return obj;
}
const nowTime = new Date();
console.log(F3(nowTime));
}