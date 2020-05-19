import Facade from '../../presenter/Facade';
import { sliderOptions } from '../../model/sliderOptions';

export default class ControlPanel {
  private slider!: Facade;

  private parent!: Node | null;

  private controlPanel = document.createElement('div');

  private minMax: HTMLInputElement[] = [];

  private values: HTMLInputElement[] = [];

  private step = document.createElement('input');

  private orientationCheck = document.createElement('input');

  private rangeCheck = document.createElement('input');

  private showLabelCheck = document.createElement('input');

  private hasRange!: boolean;

  constructor(slider: Facade) {
    this.init(slider);
  }

  public getSliderOptions(): void {
    this.minMax.forEach((input, index) => { (input.value = String(this.slider.getMinMax()[index])); });
    this.values.forEach((input, index) => { (input.value = String(this.slider.getValues()[index])); });
    this.step.value = String(this.slider.getStep());
    if (this.slider.getOrientation()) {
      this.getOrientationCheckbox().checked = true;
    }
    if (this.slider.getRange()) {
      this.getRangeCheckbox().checked = true;
    }
    if (this.slider.getLabels()) {
      this.getShowLabelCheckbox().checked = true;
    }
  }

  public getMinMaxInputs(): HTMLInputElement[] {
    return this.minMax;
  }

  public getValueInputs(): HTMLInputElement[] {
    return this.values;
  }

  public getStepInput(): HTMLInputElement {
    return this.step;
  }

  public getOrientationCheckbox(): HTMLInputElement {
    return this.orientationCheck;
  }

  public getRangeCheckbox(): HTMLInputElement {
    return this.rangeCheck;
  }

  public getShowLabelCheckbox(): HTMLInputElement {
    return this.showLabelCheck;
  }

  private init(slider: Facade): void {
    this.slider = slider;
    this.parent = this.slider.getParent().parentNode;
    this.hasRange = slider.getRange();
    this.controlPanel.classList.add('demo-slider__control-panel');
    const parentElement = this.parent?.parentElement;
    if (parentElement) parentElement.prepend(this.controlPanel);
    this.createMaxMinInputs();
    this.createValueInputs();
    this.createStepInput();
    this.createOrientationCheckbox();
    this.createRangeCheckbox();
    this.createShowLabelCheckbox();
    this.setEventListeners();
    this.getSliderOptions();
    this.updateValues();
  }

  private setEventListeners(): void {
    this.minMax.forEach((input) => input.addEventListener('change', this.changeMinMax.bind(this)));
    this.values.forEach((input) => input.addEventListener('change', this.changeValues.bind(this)));
    this.step.addEventListener('change', this.changeStep.bind(this));
    this.getOrientationCheckbox().addEventListener('change', this.changeOrientation.bind(this));
    this.getRangeCheckbox().addEventListener('change', this.changeRange.bind(this));
    this.getShowLabelCheckbox().addEventListener('change', this.changeLabelVisibility.bind(this));
  }

  private changeMinMax(): void {
    const newMinMax = this.minMax.map((input) => parseInt(input.value, 10));
    this.slider.setMinMax(newMinMax);
  }

  private changeValues(): void {
    const newValues = this.values.map((input) => parseInt(input.value, 10));
    this.slider.setValues(newValues);
  }

  private changeStep(): void {
    const newStep = parseInt(this.step.value, 10);
    this.slider.setStep(newStep);
  }

  private changeOrientation(): void {
    const newOrientation = this.getOrientationCheckbox().checked;
    this.slider.setOrientation(newOrientation);
  }

  private changeRange(): void {
    const newRange = this.getRangeCheckbox().checked;
    if (!newRange) {
      this.values[1].remove();
    } else {
      this.values[0].after(this.values[1]);
    }
    this.slider.setRange(newRange);
  }

  private changeLabelVisibility(): void {
    const showLabels = this.getShowLabelCheckbox().checked;
    this.slider.setLabels(showLabels);
  }

  private updateValues(): void {
    this.slider.observer.subscribe((valueData: sliderOptions) => {
      if (valueData.values) {
        const { values } = valueData;
        this.values.forEach((input, index) => { (input.value = String(values[index])); });
      }
      if (valueData.min !== undefined && valueData.max !== undefined) {
        const minMax = [valueData.min, valueData.max];
        this.minMax.forEach((input, index) => { (input.value = String(minMax[index])); });
      }
      if (valueData.step !== undefined) {
        this.step.value = String(valueData.step);
      }
    });
  }

  private createMaxMinInputs(): void {
    const title = document.createElement('p');
    title.classList.add('demo-slider__title');
    title.innerText = 'Min/Max';
    const inputMin = document.createElement('input');
    const inputMax = document.createElement('input');
    inputMin.classList.add('demo-slider__input');
    inputMax.classList.add('demo-slider__input');
    inputMin.type = 'number';
    inputMax.type = 'number';
    this.controlPanel.append(title, inputMin, inputMax);
    this.minMax = [inputMin, inputMax];
  }

  private createValueInputs(): void {
    const title = document.createElement('p');
    title.classList.add('demo-slider__title');
    title.innerText = 'Values';
    const inputMin = document.createElement('input');
    const inputMax = document.createElement('input');
    inputMin.classList.add('demo-slider__input', 'demo-slider__handler-value');
    inputMax.classList.add('demo-slider__input', 'demo-slider__handler-value');
    inputMin.type = 'number';
    inputMax.type = 'number';
    this.controlPanel.append(title, inputMin);
    this.values.push(inputMin, inputMax);
    if (this.hasRange === true) {
      inputMin.classList.add('demo-slider__handler-value_min');
      inputMax.classList.add('demo-slider__handler-value_max');
      this.controlPanel.append(inputMax);
    }
  }

  private createStepInput(): void {
    const title = document.createElement('p');
    title.classList.add('demo-slider__title');
    title.innerText = 'Step';
    this.step.classList.add('demo-slider__input');
    this.step.type = 'number';
    this.controlPanel.append(title, this.step);
  }

  private createOrientationCheckbox(): void {
    const title = document.createElement('p');
    title.classList.add('demo-slider__title');
    title.innerText = 'Vertical';
    this.orientationCheck.classList.add('demo-slider__input');
    this.orientationCheck.type = 'checkbox';
    this.controlPanel.append(title, this.orientationCheck);
  }

  private createRangeCheckbox(): void {
    const title = document.createElement('p');
    title.classList.add('demo-slider__title');
    title.innerText = 'Range';
    this.rangeCheck.classList.add('demo-slider__input');
    this.rangeCheck.type = 'checkbox';
    this.controlPanel.append(title, this.rangeCheck);
  }

  private createShowLabelCheckbox(): void {
    const title = document.createElement('p');
    title.classList.add('demo-slider__title');
    title.innerText = 'Show labels';
    this.showLabelCheck.classList.add('demo-slider__input');
    this.showLabelCheck.type = 'checkbox';
    this.controlPanel.append(title, this.showLabelCheck);
  }
}
