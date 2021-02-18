
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
       let calc = (vlr/1000);  
       return `${calc}KG`;
    } 

    converterToMeter(vlr) {
       let calc = (vlr/100);  
       return `${calc}M`;
    }
    
}


let conversorService = new ConversorService();

export default conversorService;