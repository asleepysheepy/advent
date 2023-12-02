import day1 from './day01/day01.js'

export default async function run(day) {
  if (day) {
    await runDay(day)
  } else {
    await runAll()
  }
}

async function runDay(day) {
  switch (day) {
    case 1: {
      await day1()
      break
    }
    default: {
      console.error(
        'Invalid day passed.\n',
        '\n',
        'Valid day are:\n',
        '1\n',
        '\n',
        `You entered: ${day}`,
      )
    }
  }
}

async function runAll() {
  const days = [day1]

  Promise.all(
    days.map(async (day) => {
      await day()
      console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
    }),
  )
}
