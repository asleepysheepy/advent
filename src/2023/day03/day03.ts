import { printAnswer, printTitle, sumArray } from '/utils.ts'

const dataFilePath = './src/2023/day03/data.txt'

type PartNumber = {
  value: number
  start: number
  end: number
}

export default function run() {
  const rawSchematicData = Deno.readTextFileSync(dataFilePath).split('\n')

  const partNumbersByLine = findPartNumbersByLine(rawSchematicData)
  const partNumbersSum = getValidPartNumbers(partNumbersByLine, rawSchematicData)
  const gearRatio = getGearRatio(partNumbersByLine, rawSchematicData)

  printTitle('Day 03 - Gear Ratios')
  printAnswer('The sum of engine part numbers is', sumArray(partNumbersSum))
  printAnswer('The sum of all of the gear ratios is', gearRatio)
}

function findPartNumbersByLine(lines: string[]): Array<PartNumber[]> {
  return lines.map((line) => {
    const numberMatches = line.matchAll(/\d+/g)
    const partNumbers: PartNumber[] = []

    for (const match of numberMatches) {
      partNumbers.push({
        value: parseInt(match[0]),
        start: match.index!,
        end: match.index! + match[0].length - 1,
      })
    }

    return partNumbers
  })
}

function getValidPartNumbers(partNumbers: Array<PartNumber[]>, schematicData: string[]): number[] {
  const validPartNumbers = schematicData.map((line, lineIndex) => {
    const partNumbersInLine = partNumbers[lineIndex]

    const previousLine = schematicData[lineIndex - 1] ?? ''
    const nextLine = schematicData[lineIndex + 1] ?? ''

    return partNumbersInLine.map((partNumber) => {
      const startingIndex = partNumber.start - 1
      const endingIndex = partNumber.end + 2

      const adjacentText = [
        previousLine.substring(startingIndex, endingIndex),
        line.substring(startingIndex, endingIndex),
        nextLine.substring(startingIndex, endingIndex),
      ].join('')

      const strippedText = adjacentText.replaceAll('.', '').replaceAll(/\d/g, '')

      return strippedText.length > 0 ? partNumber.value : 0
    })
  })

  return validPartNumbers.flat()
}

function getGearRatio(partNumbers: Array<PartNumber[]>, schematicData: string[]): number {
  let gearRatio = 0

  schematicData.forEach((line, lineIndex) => {
    const gears = [...line.matchAll(/\*/g)]

    for (const gear of gears) {
      const parts = [
        ...partNumbers[lineIndex - 1],
        ...partNumbers[lineIndex],
        ...partNumbers[lineIndex + 1],
      ]

      const adjacentParts = parts.filter((part) => {
        return part.start - 1 <= gear.index! && gear.index! <= part.end + 1
      })

      if (adjacentParts.length === 2) {
        gearRatio += adjacentParts[0].value * adjacentParts[1].value
      }
    }
  })

  return gearRatio
}
