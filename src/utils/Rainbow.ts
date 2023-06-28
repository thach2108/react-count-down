class Rainbow {
  gradients: ColourGradient[] = []
  minNum = 0
  maxNum = 100
  colours = ['ff0000', 'ffff00', '00ff00', '0000ff']

  constructor() {
    this.setColours(this.colours)
  }

  setColours = (spectrum: string[]) => {
    if (spectrum.length < 2) {
      throw new Error('Rainbow must have two or more colours.')
    } else {
      let increment = (this.maxNum - this.minNum) / (spectrum.length - 1)
      let firstGradient = new ColourGradient()
      firstGradient.setGradient(spectrum[0], spectrum[1])
      firstGradient.setNumberRange(this.minNum, this.minNum + increment)
      this.gradients = [firstGradient]

      for (var i = 1; i < spectrum.length - 1; i++) {
        var colourGradient = new ColourGradient()
        colourGradient.setGradient(spectrum[i], spectrum[i + 1])
        colourGradient.setNumberRange(
          this.minNum + increment * i,
          this.minNum + increment * (i + 1)
        )
        this.gradients[i] = colourGradient
      }

      this.colours = spectrum
    }
  }

  setSpectrum = (spectrum: string[]) => {
    this.setColours(spectrum)
  }

  setSpectrumByArray = (array: string[]) => {
    this.setColours(array)
  }

  colourAt = (numb: number) => {
    if (isNaN(numb)) {
      throw new TypeError(numb + ' is not a number')
    } else if (this.gradients.length === 1) {
      return this.gradients[0].colourAt(numb)
    } else {
      var segment = (this.maxNum - this.minNum) / this.gradients.length
      var index = Math.min(
        Math.floor((Math.max(numb, this.minNum) - this.minNum) / segment),
        this.gradients.length - 1
      )
      return this.gradients[index].colourAt(numb)
    }
  }

  setNumberRange = (minNumber: number, maxNumber: number) => {
    if (maxNumber > minNumber) {
      this.minNum = minNumber
      this.maxNum = maxNumber
      this.setColours(this.colours)
    } else {
      throw new RangeError(
        'maxNumber (' +
          maxNumber +
          ') is not greater than minNumber (' +
          minNumber +
          ')'
      )
    }
  }
}

class ColourGradient {
  startColour = 'ff0000'
  endColour = '0000ff'
  minNum = 0
  maxNum = 100

  setGradient = (colourStart: string, colourEnd: string) => {
    this.startColour = this.getHexColour(colourStart)
    this.endColour = this.getHexColour(colourEnd)
  }

  setNumberRange = (minNumber: number, maxNumber: number) => {
    if (maxNumber > minNumber) {
      this.minNum = minNumber
      this.maxNum = maxNumber
    } else {
      throw new RangeError(
        'maxNumber (' +
          maxNumber +
          ') is not greater than minNumber (' +
          minNumber +
          ')'
      )
    }
  }

  colourAt = (number: number) => {
    return (
      this.calcHex(
        number,
        this.startColour.substring(0, 2),
        this.endColour.substring(0, 2)
      ) +
      this.calcHex(
        number,
        this.startColour.substring(2, 4),
        this.endColour.substring(2, 4)
      ) +
      this.calcHex(
        number,
        this.startColour.substring(4, 6),
        this.endColour.substring(4, 6)
      )
    )
  }

  calcHex = (
    number: number,
    channelStart_Base16: any,
    channelEnd_Base16: any
  ) => {
    var num = number
    if (num < this.minNum) {
      num = this.minNum
    }
    if (num > this.maxNum) {
      num = this.maxNum
    }
    var numRange = this.maxNum - this.minNum
    var cStart_Base10 = parseInt(channelStart_Base16, 16)
    var cEnd_Base10 = parseInt(channelEnd_Base16, 16)
    var cPerUnit = (cEnd_Base10 - cStart_Base10) / numRange
    var c_Base10 = Math.round(cPerUnit * (num - this.minNum) + cStart_Base10)
    return this.formatHex(c_Base10.toString(16))
  }

  formatHex = (hex: string) => {
    if (hex.length === 1) {
      return '0' + hex
    } else {
      return hex
    }
  }

  isHexColour = (str: string) => {
    var regex = /^#?[0-9a-fA-F]{6}$/i
    return regex.test(str)
  }

  getHexColour = (str: string) => {
    if (this.isHexColour(str)) {
      return str.substring(str.length - 6, str.length)
    } else {
      var name = str.toLowerCase()
      if (this.colourNames.hasOwnProperty(name)) {
        return this.colourNames[name]
      }
      throw new Error(str + ' is not a valid colour.')
    }
  }

  // Extended list of CSS colornames s taken from
  // http://www.w3.org/TR/css3-color/#svg-color
  colourNames: { [key: string]: string } = {
    aliceblue: 'F0F8FF',
    antiquewhite: 'FAEBD7',
    aqua: '00FFFF',
    aquamarine: '7FFFD4',
    azure: 'F0FFFF',
    beige: 'F5F5DC',
    bisque: 'FFE4C4',
    black: '000000',
    blanchedalmond: 'FFEBCD',
    blue: '0000FF',
    blueviolet: '8A2BE2',
    brown: 'A52A2A',
    burlywood: 'DEB887',
    cadetblue: '5F9EA0',
    chartreuse: '7FFF00',
    chocolate: 'D2691E',
    coral: 'FF7F50',
    cornflowerblue: '6495ED',
    cornsilk: 'FFF8DC',
    crimson: 'DC143C',
    cyan: '00FFFF',
    darkblue: '00008B',
    darkcyan: '008B8B',
    darkgoldenrod: 'B8860B',
    darkgray: 'A9A9A9',
    darkgreen: '006400',
    darkgrey: 'A9A9A9',
    darkkhaki: 'BDB76B',
    darkmagenta: '8B008B',
    darkolivegreen: '556B2F',
    darkorange: 'FF8C00',
    darkorchid: '9932CC',
    darkred: '8B0000',
    darksalmon: 'E9967A',
    darkseagreen: '8FBC8F',
    darkslateblue: '483D8B',
    darkslategray: '2F4F4F',
    darkslategrey: '2F4F4F',
    darkturquoise: '00CED1',
    darkviolet: '9400D3',
    deeppink: 'FF1493',
    deepskyblue: '00BFFF',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1E90FF',
    firebrick: 'B22222',
    floralwhite: 'FFFAF0',
    forestgreen: '228B22',
    fuchsia: 'FF00FF',
    gainsboro: 'DCDCDC',
    ghostwhite: 'F8F8FF',
    gold: 'FFD700',
    goldenrod: 'DAA520',
    gray: '808080',
    green: '008000',
    greenyellow: 'ADFF2F',
    grey: '808080',
    honeydew: 'F0FFF0',
    hotpink: 'FF69B4',
    indianred: 'CD5C5C',
    indigo: '4B0082',
    ivory: 'FFFFF0',
    khaki: 'F0E68C',
    lavender: 'E6E6FA',
    lavenderblush: 'FFF0F5',
    lawngreen: '7CFC00',
    lemonchiffon: 'FFFACD',
    lightblue: 'ADD8E6',
    lightcoral: 'F08080',
    lightcyan: 'E0FFFF',
    lightgoldenrodyellow: 'FAFAD2',
    lightgray: 'D3D3D3',
    lightgreen: '90EE90',
    lightgrey: 'D3D3D3',
    lightpink: 'FFB6C1',
    lightsalmon: 'FFA07A',
    lightseagreen: '20B2AA',
    lightskyblue: '87CEFA',
    lightslategray: '778899',
    lightslategrey: '778899',
    lightsteelblue: 'B0C4DE',
    lightyellow: 'FFFFE0',
    lime: '00FF00',
    limegreen: '32CD32',
    linen: 'FAF0E6',
    magenta: 'FF00FF',
    maroon: '800000',
    mediumaquamarine: '66CDAA',
    mediumblue: '0000CD',
    mediumorchid: 'BA55D3',
    mediumpurple: '9370DB',
    mediumseagreen: '3CB371',
    mediumslateblue: '7B68EE',
    mediumspringgreen: '00FA9A',
    mediumturquoise: '48D1CC',
    mediumvioletred: 'C71585',
    midnightblue: '191970',
    mintcream: 'F5FFFA',
    mistyrose: 'FFE4E1',
    moccasin: 'FFE4B5',
    navajowhite: 'FFDEAD',
    navy: '000080',
    oldlace: 'FDF5E6',
    olive: '808000',
    olivedrab: '6B8E23',
    orange: 'FFA500',
    orangered: 'FF4500',
    orchid: 'DA70D6',
    palegoldenrod: 'EEE8AA',
    palegreen: '98FB98',
    paleturquoise: 'AFEEEE',
    palevioletred: 'DB7093',
    papayawhip: 'FFEFD5',
    peachpuff: 'FFDAB9',
    peru: 'CD853F',
    pink: 'FFC0CB',
    plum: 'DDA0DD',
    powderblue: 'B0E0E6',
    purple: '800080',
    red: 'FF0000',
    rosybrown: 'BC8F8F',
    royalblue: '4169E1',
    saddlebrown: '8B4513',
    salmon: 'FA8072',
    sandybrown: 'F4A460',
    seagreen: '2E8B57',
    seashell: 'FFF5EE',
    sienna: 'A0522D',
    silver: 'C0C0C0',
    skyblue: '87CEEB',
    slateblue: '6A5ACD',
    slategray: '708090',
    slategrey: '708090',
    snow: 'FFFAFA',
    springgreen: '00FF7F',
    steelblue: '4682B4',
    tan: 'D2B48C',
    teal: '008080',
    thistle: 'D8BFD8',
    tomato: 'FF6347',
    turquoise: '40E0D0',
    violet: 'EE82EE',
    wheat: 'F5DEB3',
    white: 'FFFFFF',
    whitesmoke: 'F5F5F5',
    yellow: 'FFFF00',
    yellowgreen: '9ACD32'
  }
}

export default Rainbow
