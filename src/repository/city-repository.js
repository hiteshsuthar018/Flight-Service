const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) { //destructuring the object
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong with repository layer");
            throw { error };
        }
    }
    async deleteCity(cityid) {
        try {
            await City.destroy({
                where: {
                    id: cityid
                }
            })
        } catch (error) {
            console.log("Something went wrong with repository layer");
            throw { error };
        }
    }
    async updateCity(cityId,data) {
        try {
            const city = await City.update(data,{
                where:{
                    id:cityId
                }
            })
            return city;
        } catch (error) {
            console.log("Something went wrong with repository layer");
            throw { error };
        }
    }

    async getCity(cityid) {
        try {
            const city = await City.findByPk(cityid);
            return city;
        } catch (error) {
            console.log("Something went wrong with repository layer");
            throw { error };
        }
    }
}

module.exports = CityRepository;