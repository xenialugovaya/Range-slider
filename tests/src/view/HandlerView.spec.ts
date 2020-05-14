import HandlerView from '../../../src/view/HandlerView';

describe('test handler view logic', () => {
  setFixtures('<div class="slider"><div class="slider__body"></div></div>');
  const parent: any = document.querySelector('.slider__body');
  let handler = new HandlerView(parent, true);

  describe('test get func for handler and label elements', () => {
    it('should return handler htmlelement', () => {
      expect(handler.getElement()).toHaveClass('slider__handler');
    });
    it('should return label htmlelement', () => {
      expect(handler.getLabelElement()).toHaveClass('slider__label');
    });
  });

  describe('test setPosition func for handler and label', () => {
    beforeEach(() => {
      setFixtures('<div class="slider"><div class="slider__body"></div></div>');
      const parent: any = document.querySelector('.slider__body');
      handler = new HandlerView(parent, true);
    });
    it('should set position for handler correctly', () => {
      $('.slider__handler').css({ height: '10px' });
      $('.slider__body').css({ height: '100px' });
      const value = 10;
      const min = 0;
      const max = 20;
      let isVertical = true;

      expect(handler.setPosition(value, min, max, isVertical)).toEqual(45);

      $('.slider__handler').css({ width: '10px' });
      $('.slider__body').css({ width: '100px' });
      isVertical = false;
      expect(handler.setPosition(value, min, max, isVertical)).toEqual(45);
    });
  });

  describe('test updateLabel func', () => {
    it('updateLabel should add label if flag showlabel is true', () => {
      setFixtures('<div class="slider"><div class="slider__body"></div></div>');
      const parent: any = document.querySelector('.slider__body');
      handler = new HandlerView(parent, false);
      const value = 10;
      const showLabel = true;
      expect(handler.getLabelElement()).not.toExist();

      handler.updateLabel(showLabel, value);
      expect(handler.getLabelElement()).toExist();
      expect($('.slider__label')).toExist();
      expect(handler.getLabelElement()).toHaveClass('slider__label');
    });

    it('updateLabel should remove label if flag showlabel is false', () => {
      setFixtures('<div class="slider"><div class="slider__body"></div></div>');
      const parent: any = document.querySelector('.slider__body');
      handler = new HandlerView(parent, true);
      const value = 10;
      const showLabel = false;
      handler.updateLabel(showLabel, value);
      expect($('.slider__label')).not.toExist();
    });
  });
});
