import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-slider-km',
  templateUrl: './slider-km.component.html',
  styleUrls: ['./slider-km.component.css']
})
export class SliderKmComponent implements OnInit, OnChanges {
  @Output() emitValue = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
  updateSetting(event) {
    this.emitValue.emit(event.value);
  }
}
