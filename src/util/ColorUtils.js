import colors from './colors';

const assignColor = (arr, index) => {
  return arr[index];
}

class ColorUtils {

  static assignRandomColor() {
    let index = Math.floor(Math.random() * (147 - 1) + 1);
    return assignColor(colors.names, index);
  }

}

export default ColorUtils;
