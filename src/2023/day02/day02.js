import { readFile } from 'node:fs/promises'

const calibrationFilePath = './src/2023/day02/data.txt'

export default async function run() {
  const fileInput = await readFile(calibrationFilePath, { encoding: 'utf8' })
  const rawGameData = fileInput.split('\n')

  const parsedGameData = parseGames(rawGameData)
  const possibleGames = getPossibleGames(parsedGameData, {
    totalRed: 12,
    totalGreen: 13,
    totalBlue: 14,
  })

  const gameIdSum = possibleGames.reduce((idSum, game) => idSum + game.id, 0)
  const gamePowerSum = parsedGameData.reduce((powerSum, game) => powerSum + game.power, 0)

  console.log('02, 2023:')
  console.log(`\tThe sum of game ids possible with 12R, 13G, and 14B cubes: ${gameIdSum}`)
  console.log(`\tThe sum of powers of games: ${gamePowerSum}`)
}

function parseGames(games) {
  return games.map((game) => {
    const [gameIdSegment, pullsSegment] = game.split(': ')
    const pullData = pullsSegment.split('; ')

    const pulls = pullData.map((pull) =>
      pull
        .split(', ')
        .map((cube) => cube.split(' '))
        .reduce((cubeData, [cubeCount, cubeColor]) => {
          return {
            ...cubeData,
            [cubeColor]: cubeCount,
          }
        }, {}),
    )

    const minimums = {
      red: Math.max(...pulls.map((pull) => pull.red).filter((cubes) => !!cubes)),
      green: Math.max(...pulls.map((pull) => pull.green).filter((cubes) => !!cubes)),
      blue: Math.max(...pulls.map((pull) => pull.blue).filter((cubes) => !!cubes)),
    }

    return {
      id: parseInt(gameIdSegment.replace('Game ', '')),
      minimums,
      pulls,
      power: Object.values(minimums).reduce((power, value) => power * value, 1),
    }
  })
}

function getPossibleGames(games, { totalRed, totalBlue, totalGreen }) {
  const impossibleGameIds = games
    .filter((game) => {
      return game.pulls.some(({ red, green, blue }) => {
        return red > totalRed || blue > totalBlue || green > totalGreen
      })
    })
    .map((game) => game.id)

  return games.filter((game) => !impossibleGameIds.includes(game.id))
}
