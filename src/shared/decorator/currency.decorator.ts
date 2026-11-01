import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isCurrencyValid', async: false })
export class IsCurrencyConstraint implements ValidatorConstraintInterface {
  validate(currency: string, args: ValidationArguments) {
    if (typeof currency !== 'string') {
      return false;
    }

    const validCurrencyCodes = ['USD', 'VND'];
    const upperCaseCurrency = currency.toUpperCase();

    return validCurrencyCodes.includes(upperCaseCurrency);
  }

  defaultMessage(args: ValidationArguments) {
    return 'CUR-0001';
  }
}

export function IsCurrencyValid(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsCurrencyConstraint,
    });
  };
}
