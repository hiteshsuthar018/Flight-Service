const { FlightRepository, AirplaneRepository } = require("../repository/index");
const {compareTime} = require("../utils/helper");
class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
              throw {error:"arrival Time can not be less than departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            })
            return flight
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }
}

module.exports =FlightService;
/* 
*{
*   flight number,
*   airplane Id,
*   departureAirport Id,
*   arrivalAirport Id,
*   arrival Time,
*   departure Time,
*   price
*   totalSeats -> airplane
*}
*/