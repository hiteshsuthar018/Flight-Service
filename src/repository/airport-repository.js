const CrubRepository = require("./crud-repository");
const {Airport} =require("../models/index");
class AirportRepository extends CrubRepository {
    constructor() {
        super(Airport);
    }
}

module.exports = AirportRepository;