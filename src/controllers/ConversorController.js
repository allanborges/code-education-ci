
import conversorService from '../services/ConversorService'

class ConversorController {

    converterToCelsus(vlr) {
        return conversorService.converterToCelsus(vlr);
    }   
    
    converterToFahrenheit(vlr) {
        return conversorService.converterToFahrenheit(vlr);
    }    
}

let conversorController = new ConversorController();

export default conversorController;


