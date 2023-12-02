import day1 from './day01/day01.js'
import day2 from './day02/day02.js'

export default async function run(day) {
  // Every day's function in an array
  const days = [day1, day2]

  // If a day was not passed, run all the days
  if (!day) {
    await Promise.all(
      days.map(async (day) => {
        await day()
        console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
      }),
    )

    return
  }

  // Get the function for the given day
  const dayFunction = days[day - 1]

  // If there isn't a day function display an error
  if (!dayFunction) {
    console.error(
      'Invalid day passed.\n\n',
      'Valid days are:\n',
      '1\n',
      '2\n',
      `\nYou entered: ${day}`,
    )

    return
  }

  // Run the day function
  await dayFunction()
}
