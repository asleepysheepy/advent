import { red } from 'fmt/colors.ts'
import year2023 from '/2023/index.ts'

function run() {
  const args = Deno.args
  const year = parseInt(args[0])
  const day = parseInt(args[1])

  if (year) {
    runYear(year, day)
  } else {
    runAll()
  }
}

async function runYear(year: number, day: number) {
  switch (year) {
    case 2023:
      await year2023(day)
      break
    default:
      console.error(red('Invalid year passed.\n'))
      console.error('Valid years are: 2023')
      console.error(`You entered: ${year}`)
  }
}

async function runAll() {
  await year2023()
}

run()
