import { bold, brightGreen, gray } from 'fmt/colors.ts'
import { sumArray } from '/utils.ts'

const dataFilePath = './src/2023/day03/data.txt'

export default async function run() {
  const rawSchematicData = (await Deno.readTextFile(dataFilePath)).split('\n')

  const parsedSchematicData = rawSchematicData.map((schematicLine, index, schematicData) => {
    const previousLine = schematicData[index - 1]
    const nextLine = schematicData[index + 1]

    return parseLine(schematicLine, previousLine, nextLine)
  }).flat()

  const partNumbers = parsedSchematicData
    .filter((datum) => datum.isValidPart)
    .map((datum) => datum.number)

  console.log(gray('Day 02'))
  console.log('  The sum of engine part numbers is:', brightGreen(bold(`${sumArray(partNumbers)}`)))
}

function hasSymbol(str: string): boolean {
  const str2 = str.replaceAll('.', '').replaceAll(/\d/g, '')

  return str2.length > 0
}

function parseLine(line: string, previousLine: string, nextLine: string) {
  const numbers = line.match(/\d+/g)
  if (numbers == null) {
    return [{
      number: 0,
      isValidPart: false,
    }]
  }

  return numbers.map((number) => {
    const index = line.indexOf(number)
    const previousCharacterIndex = index - 1
    const nextCharacterIndex = index + number.length

    const previousLineSection = previousLine?.slice(
      previousCharacterIndex >= 0 ? previousCharacterIndex : 0,
      nextCharacterIndex + 1,
    )
    const nextLineSection = nextLine?.slice(
      previousCharacterIndex >= 0 ? previousCharacterIndex : 0,
      nextCharacterIndex + 1,
    )

    const surroundingCharacters = [
      previousLineSection,
      line[previousCharacterIndex],
      line[nextCharacterIndex],
      nextLineSection,
    ].reduce((x, y) => (y?.length > 0 ? x.concat(y) : x), '')

    return {
      number: parseInt(number),
      isValidPart: hasSymbol(surroundingCharacters),
    }
  })
}
