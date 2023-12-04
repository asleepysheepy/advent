import { printAnswer, printTitle, sumArray } from '/utils.ts'

const dataFilePath = './src/2023/day03/data.txt'

type schematicParserFunction = (line: string, previousLine: string, nextLine: string) => number[]

export default async function run() {
  const rawSchematicData = (await Deno.readTextFile(dataFilePath)).split('\n')

  const partNumbers = parseSchematicData(rawSchematicData, findPartNumbers)
  // const gearRatios = parseSchematicData(rawSchematicData, findGearRatios)

  printTitle('Day 03 - Gear Ratios')
  printAnswer('The sum of engine part numbers is:', sumArray(partNumbers))
  // printAnswer('The sum of all of the gear ratios is:', sumArray(gearRatios)
}

function parseSchematicData(schematicData: string[], parser: schematicParserFunction) {
  return schematicData.map((schematicLine, index) => {
    const previousLine = schematicData[index - 1]
    const nextLine = schematicData[index + 1]

    return parser(schematicLine, previousLine, nextLine)
  }).flat()
}

function findPartNumbers(line: string, previousLine: string, nextLine: string): number[] {
  const numberMatches = line.matchAll(/\d+/g)
  const lineData = []

  for (const match of numberMatches) {
    const number = match[0]
    const index = match.index
    if (index == null) {
      continue
    }

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

    lineData.push({
      number: parseInt(number),
      isValidPart: surroundingCharacters.replaceAll('.', '').replaceAll(/\d/g, '').length > 0,
    })
  }

  return lineData
    .filter((datum) => datum.isValidPart)
    .map((datum) => datum.number)
}
