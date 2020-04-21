import MainModel from '../model/MainModel';
import MainView from '../view/MainView';
import { sliderOptions } from '../model/sliderOptions';

export default class Presenter {
  private model: MainModel;

  private view: MainView;

  private values: number[];

  private parentNode: HTMLElement;

  constructor(parent: HTMLElement, model: MainModel) {
    this.model = model;
    this.values = this.model.rangeValue;
    this.parentNode = parent;
    this.view = new MainView(
      this.parentNode,
      this.model.hasRange,
      this.model.isVertical,
      this.model.min,
      this.model.max,
      this.values,
      this.model.hasLabels,
    );
    this.updateModel();
    this.updateView();
  }

  private updateModel(): void {
    this.view.observer.subscribe((valueData: sliderOptions) => {
      this.model.update(valueData);
    });
  }

  private updateView(): void {
    this.model.observer.subscribe((valueData: sliderOptions) => {
      this.view.update(valueData);
    });
  }

  get parent(): HTMLElement {
    return this.parentNode;
  }
}
