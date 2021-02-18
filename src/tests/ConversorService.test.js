import conversorService from '../services/ConversorService'
import 'jest';

it("test with contain symbolic representation Fahrenheit", () => {
    expect(conversorService.converterToFahrenheit(30)).toContain('F');
}
);

it("test with contain symbolic representation Celsus", () => {
    expect(conversorService.converterToCelsus(30)).toContain('C');
}
);

it("Test kilo convertion", () => {
    expect(conversorService.converterToKilograms(1000)).toEqual('1KG')
}
);
