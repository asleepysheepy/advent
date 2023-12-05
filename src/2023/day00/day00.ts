import { printAnswer, printTitle } from '/utils.ts'

const dataFilePath = './src/2023/day00/data.txt'

export default function run() {
  const rawData = Deno.readTextFileSync(dataFilePath).split('\n')

  printTitle('Day 00 - Title')
  printAnswer('', 11)
  printAnswer('', 12)
}
