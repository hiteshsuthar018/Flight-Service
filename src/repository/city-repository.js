const { Op } = require("sequelize");
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
            return true;
        } catch (error) {
            console.log("Something went wrong with repository layer");
            throw { error };
        }
    }
    async updateCity(cityId, data) {
        try {
            //the below approach also works but will not return updated object
            //if we are using pg then returning :true can be used , else not
            //the It return no. of raws affected
            // const city = await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // })
            //for getting updated data in mysql we use the below approach
            //we can also do like these
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
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

    async getAllCities(filter) { //filter can be empty also
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }

            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong with repository layer");
            throw { error };
        }
    }
    async createCities(data){

        try {
            console.log(obj);
            const cities = await City.bulkCreate(data);
            return cities;
        } catch (error) {
            console.log("Something went wrong with repository layer");
            throw { error };
        }

    }
}

module.exports = CityRepository;