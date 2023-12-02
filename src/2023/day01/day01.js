import { readFile } from 'node:fs/promises'

const calibrationFilePath = './src/2023/day01/data.txt'

export default async function run() {
  const fileInput = await readFile(calibrationFilePath, { encoding: 'utf8' })
  const rawCalibrationData = fileInput.split('\n')
  const parsedCalibrationData = parseCalibrationData(rawCalibrationData)

  console.log('01, 2023:')
  console.log(`\tThe original calibration number is: ${getCalibrationNumber(rawCalibrationData)}`)
  console.log(`\tThe updated calibration number is: ${getCalibrationNumber(parsedCalibrationData)}`)
}

function getCalibrationNumber(calibrationData) {
  return calibrationData.reduce((partialSum, dataItem) => {
    const numbers = dataItem.match(/\d/g)
    const firstNum = numbers[0]
    const lastNum = numbers[numbers.length - 1]

    return partialSum + parseInt(`${firstNum}${lastNum}`)
  }, 0)
}

function parseCalibrationData(calibrationData) {
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
