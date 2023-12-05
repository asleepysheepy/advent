import { bold, brightMagenta, red } from 'fmt/colors.ts'
import day1 from '/2023/day01/day01.ts'
import day2 from '/2023/day02/day02.ts'
import day3 from '/2023/day03/day03.ts'
import day4 from '/2023/day04/day04.ts'

export default function run(day?: number) {
  // Every day's function in an array
  const days = [day1, day2, day3, day4]

  // If a day was not passed, run all the days
  if (!day) {
    console.log(bold('2023'))
    days.forEach((day, index) => {
      day()

      if ((index + 1) !== days.length) {
        console.log(brightMagenta('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'))
      }
    })

    return
  }

  // Get the function for the given day
  const dayFunction = days[day - 1]

  // If there isn't a day function display an error
  if (!dayFunction) {
    console.error(red('Invalid day passed.\n'))
    console.error('Valid days are: 1 - 4')
    console.error(`You entered: ${day}`)

    return
  }

  // Run the day function
  console.log(bold('2023'))
  dayFunction()
}
