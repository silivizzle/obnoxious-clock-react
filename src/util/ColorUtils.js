import colors from './colors';

class ColorUtils {

  constructor() {
    this.colorArr = colors.names;
  }

  assignRandomColor() {
    let index = Math.floor(Math.random() * (147 - 1) + 1);
    return this.assignColor(this.colorArr, index);
  }

  assignColor(arr, index) {
    return arr[index];
  }

}

export const colorUtils = new ColorUtils();
