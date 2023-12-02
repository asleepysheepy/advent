import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

import year2023 from './2023/index.js'

function run() {
  const args = yargs(hideBin(process.argv)).argv._
  const year = args[0]
  const day = args[1]

  if (year) {
    runYear(year, day)
  } else {
    runAll()
  }
}

async function runYear(year, day) {
  switch (year) {
    case 2023:
      await year2023(day)
      break
    default:
      console.error(
        'Invalid year passed.\n\n',
        'Valid years are:\n',
        '2023\n',
        `\nYou entered: ${year}`,
      )
  }
}

async function runAll() {
  await year2023()
}

run()
