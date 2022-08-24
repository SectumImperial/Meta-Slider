import { TipData } from '../../../Interfaces';
import SliderComponents from '../SliderComponents/SliderComponents';

class Tip extends SliderComponents {
  tip: HTMLDivElement;

  percentPosition: number;

  valueTip: number | string;

  constructor(data: TipData) {
    const {
      root,
      percentPosition,
      valueTip,
      isVertical,
    } = data;

    super(root, isVertical);
    this.percentPosition = percentPosition;
    this.valueTip = valueTip;

    this.tip = this.createTip();
    this.addTip();
  }

  public setValueTip(valueTip: number | string): void {
    this.tip.innerText = `${valueTip}`;
  }

  public hideTip() {
    this.tip.style.display = 'none';
  }

  public showTip() {
    this.tip.style.display = '';
  }

  private createTip(): HTMLDivElement {
    const tip = this.createElement('slider__tip');
    tip.classList.add(`slider__tip_${this.mod}`);
    tip.innerText = `${this.valueTip}`;
    tip.style[super.startPoint] = `${this.percentPosition}%`;
    return tip;
  }

  private addTip() {
    this.root.append(this.tip);
  }

  public setPosition(percentPosition: number, value: number): void {
    this.tip.style[this.startPoint] = `${percentPosition}%`;
    this.tip.innerText = `${value}`;
  }
}

export default Tip;
