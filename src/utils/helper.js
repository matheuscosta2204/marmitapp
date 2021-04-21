import axios from 'axios';

export const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const checkAddressDistance = (origin, destination, limit) => {
    // origin and destination "Rua address, number, cep"
    return axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin}&destinations=${destination}&key=AIzaSyB8d1i1fMkDUX9APKxAup6MBmWrWUR0cXI`)
    .then(res => {
        let distance = { ...res.data.rows[0].elements[0].distance, isOut: false };
        if((distance.value/1000) > limit) {
            distance.text = "Local fora do alcance de entrega";
            distance.isOut = true;
        }
        return distance;
    });
}