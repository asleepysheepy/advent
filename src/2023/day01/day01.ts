import { gray } from 'fmt/colors.ts'
import { printAnswer, printTitle } from '/utils.ts'

const dataFilePath = './src/2023/day01/data.txt'

export default async function run() {
  const rawCalibrationData = (await Deno.readTextFile(dataFilePath)).split('\n')
  const parsedCalibrationData = parseCalibrationData(rawCalibrationData)

  const originalCalibrationNumber = getCalibrationNumber(rawCalibrationData)
  const updatedCalibrationNumber = getCalibrationNumber(parsedCalibrationData)

  printTitle('Day 01 - Trebuchet?!')
  printAnswer('The original calibration number is:', originalCalibrationNumber)
  printAnswer('The updated calibration number is:', updatedCalibrationNumber)
}

export function getCalibrationNumber(calibrationData: string[]) {
  return calibrationData.reduce((partialSum, dataItem) => {
    const numbers = dataItem.match(/\d/g)
    if (numbers == undefined) {
      return partialSum
    }

    const firstNum = numbers[0]
    const lastNum = numbers[numbers.length - 1]

    return partialSum + parseInt(`${firstNum}${lastNum}`)
  }, 0)
}

export function parseCalibrationData(calibrationData: string[]) {
  return calibrationData.map((d) => {
    let data = d

    data = data.replaceAll('one', 'o1e')
    data = data.replaceAll('two', 't2o')
    data = data.replaceAll('three', 't3e')
    data = data.replaceAll('four', 'f4r')
    data = data.replaceAll('five', 'f5e')
    data = data.replaceAll('six', 's6x')
    data = data.replaceAll('seven', 's7n')
    data = data.replaceAll('eight', 'e8t')
    data = data.replaceAll('nine', 'n9e')

    return data
  })
}
