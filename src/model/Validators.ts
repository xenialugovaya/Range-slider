import { sliderOptions } from './sliderOptions';
import { definedOptions } from './definedOptions';

export default class Validators {
//   public static verifyOptions(options: definedOptions, currentValues: number[]) {
//     const verifiedOptions: definedOptions = options;
//     const {
//       min, max, values, isVertical, step, hasRange, hasLabels,
//     } = options;
//     if (!this.isValidNumber(min)) {
//       verifiedOptions.min = 0;
//     }
//     if (!this.isValidNumber(max)) {
//       verifiedOptions.max = 0;
//     }
//     if (!this.isValidNumber(step)) {
//       verifiedOptions.step = 1;
//     } else {
//       verifiedOptions.step = this.verifyStep(step, min, max);
//     }
//     if (!this.isValidNumber(values[0])) {
//       values[0] = 0;
//     } else {
//       values[0] = this.verifyValue(values[0], currentValues, min, max, step);
//       values[0] = this.verifyLimits(values[0], min, max);
//     }
//     if (!this.isValidNumber(values[1])) {
//       values[1] = this.verifyValue(values[1], currentValues, min, max, step);
//       values[1] = 0;
//     } else {
//       values[1] = this.verifyLimits(values[1], min, max);
//     }
//     verifiedOptions.values = this.verifyMinMaxValues(values);
//     if (!this.isBoolean(isVertical)) {
//       verifiedOptions.isVertical = Boolean(isVertical);
//     }
//     if (!this.isBoolean(hasRange)) {
//       verifiedOptions.hasRange = Boolean(hasRange);
//     }
//     if (!this.isBoolean(hasLabels)) {
//       verifiedOptions.hasLabels = Boolean(hasLabels);
//     }
//     return verifiedOptions;
//   }

  public static isValidNumber(value: number): boolean {
    return Number.isFinite(value);
  }

  public static isBoolean(value: boolean): boolean {
    return typeof value === 'boolean';
  }

  public static verifyValue(newValue: number, currentValues: number[], min: number, max: number, step: number): number {
    let checkedValue;
    const modulus = (max - min) % step;
    if (modulus > 0 && (newValue + min) > max - modulus) {
      checkedValue = max - modulus;
      return checkedValue;
    }
    if (min < 0) {
      if (modulus > 0 && newValue > max - modulus) {
        checkedValue = max - modulus;
        return checkedValue;
      }
      const shift = Math.abs(min) - Math.round(Math.abs(min) / step) * step;
      checkedValue = Math.round(newValue / step) * step - shift;
      return checkedValue;
    }
    if (newValue === currentValues[0] || newValue === currentValues[1]) {
      checkedValue = newValue;
      return checkedValue;
    }
    checkedValue = Math.round(newValue / step) * step + min;
    return checkedValue;
  }

  public static verifyMinMaxValues(values: number []): number [] {
    const checkedValues = values;
    if (checkedValues[0] > checkedValues[1]) {
      [checkedValues[0], checkedValues[1]] = [checkedValues[1], checkedValues[0]];
    }
    return checkedValues;
  }

  public static verifyLimits(value: number, min: number, max: number): number {
    let checkedValue = value;
    if (checkedValue < min) {
      checkedValue = min;
    } if (checkedValue > max) {
      checkedValue = max;
    }
    return checkedValue;
  }

  public static verifyStep(step: number, min: number, max: number): number {
    const maxStep = max - min;
    if (step > maxStep) {
      return maxStep;
    } if (step <= 0) {
      return 1;
    }
    return step;
  }
}
