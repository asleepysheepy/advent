import { readFile } from 'node:fs/promises'

const calibrationFilePath = './src/2023/day01/data.txt'

export default async function run() {
  const fileInput = await readFile(calibrationFilePath, { encoding: 'utf8' })
  const calibrationData = fileInput.split('\n')

  const calibrationNumberV1 = getCalibrationNumberV1(calibrationData)
  const calibrationNumberV2 = getCalibrationNumberV2(calibrationData)

  console.log('01, 2023:')
  console.log(`\tThe original calibration number is: ${calibrationNumberV1}`)
  console.log(`\tThe updated calibration number is: ${calibrationNumberV2}`)
}

export function getCalibrationNumberV1(calibrationData) {
  return calibrationData.reduce((partialSum, dataItem) => {
    const numbers = dataItem.match(/\d/g)
    const firstNum = numbers[0]
    const lastNum = numbers[numbers.length - 1]

    return partialSum + parseInt(`${firstNum}${lastNum}`)
  }, 0)
}

export function getCalibrationNumberV2(calibrationData) {
  const numbersAsWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const digitRegex = /\d|one|two|three|four|five|six|seven|eight|nine/g

  return calibrationData.reduce((partialSum, dataItem) => {
    const numbers = dataItem.match(digitRegex).map((digit) => {
      const numWordIndex = numbersAsWords.findIndex((word) => digit === word)

      return numWordIndex === -1 ? digit : `${numWordIndex + 1}`
    })

    const firstNum = numbers[0]
    const lastNum = numbers[numbers.length - 1]

    return partialSum + parseInt(`${firstNum}${lastNum}`)
  }, 0)
}
