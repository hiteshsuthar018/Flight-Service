const {Airport} = require("../models/index");


class AirportRepository{
    async createAirport({name,address}){
        try {
            const airport = Airport.create({name,address});
            return airport
        } catch (error) {
            console.log("something went wrong at repository layer")
            throw {error}
        }
    }
    async deleteAirport(airportId){
        try {
            const airport = Airport.destroy({
                where:{
                    id:airportId
                }
            });
            return airport;
        } catch (error) {
            console.log("something went wrong at repository layer")
            throw {error}
        }
    }
    async updateAirport(airportId,data){
        try {
            const airport = Airport.findByPk(airportId);
            airport.name = data.name;
            airport.address = data.address;
            await airport.save();
            return airport
        } catch (error) {
            console.log("something went wrong at repository layer")
            throw {error}
        }
    }
    
    async deleteAirport(){
        try {
            const airport = Airport.findAll();
            return airport;
        } catch (error) {
            console.log("something went wrong at repository layer")
            throw {error}
        }
    }
    
}

module.exports = AirportRepository;