export class Util {
  /**
   * 判断是否为undfined、null
   * @param value
   * @returns
   */
  static isUndefinedOrNull(value) {
    return typeof value === "undefined" || value === null;
  }

  /**
   * 判断是否为undefined、null或仅有空白字符
   */
  static isUndefinedOrNullOrWhiteSpace(value) {
    return (
      typeof value === "undefined" || value === null || /^\s*$/.test(value)
    );
  }

  /**
   * 判断是否为0或空白字符等
   */
  static isZeroOrWhiteSpace(value) {
    if (typeof value === "undefined" || value === null) {
      return true;
    } else if (typeof value === "string") {
      return /^\s*$/.test(value) || value === "0";
    } else if (typeof value === "number") {
      return value === 0;
    } else {
      return false;
    }
  }

  /**
   * 判断是否为整数
   * @param value
   */
  static isInt(value) {
    return typeof value === "number" && value % 1 === 0;
  }

  /**
   * 判断数组是否为Null或者空
   */
  static IsNullOrEmpty(array) {
    if (!Util.isUndefinedOrNull(array)) {
      if (array instanceof Array) {
        if (array.length > 0) {
          return false;
        }
      }
    }
    return true;
  }
}
