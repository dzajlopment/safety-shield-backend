export default function validCoordinates(lat: number, lon: number): boolean{
    return (lat>=-90 && lat<=90) && (lon>=-180 && lon<=180) 
}