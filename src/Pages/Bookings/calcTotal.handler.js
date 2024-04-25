export default function calcTotal (rooms,foods){
    let total = 0;
    rooms?.map(({ qty, room_price }) => total += qty*room_price ) 
    foods?.map(({ qty, price }) => total += qty*price ) 
    return total; 
}