
class ConversorService {

    converterToCelsus(vlr) {
        let calc = (((vlr - 32) * 5) / 9).toFixed(2)
        return `${calc}°C`; 
    }  
    
    converterToFahrenheit(vlr) {
        let calc = (((vlr * 9) / 5) + 32).toFixed(2)
        return `${calc}°F`; 
    } 

    converterToKilograms(vlr) {
        //let calc = (((vlr * 9) / 5) + 32).toFixed(2)
       // return `${calc}°F`; 
       return null;
    } 
}


let conversorService = new ConversorService();

export default conversorService;