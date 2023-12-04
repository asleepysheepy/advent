import { bold, brightGreen, gray } from 'fmt/colors.ts'
import { multiplyArray, sumArray } from '/utils.ts'

const dataFilePath = './src/2023/day02/data.txt'

type Draw = {
  red: number
  green: number
  blue: number
}

type Game = {
  id: number
  minimums: Draw
  pulls: Draw[]
  power: number
}

const MAX_RED = 12
const MAX_GREEN = 13
const MAX_BLUE = 14

const emptyDraw: Draw = {
  red: 0,
  green: 0,
  blue: 0,
}

export default async function run() {
  const rawGameData = (await Deno.readTextFile(dataFilePath)).split('\n')

  const parsedGameData = parseGames(rawGameData)
  const possibleGames = getPossibleGames(parsedGameData)

  const gameIdSum = sumArray(possibleGames.map((g) => g.id))
  const gamePowerSum = sumArray(parsedGameData.map((g) => g.power))

  console.log(gray('Day 02'))
  console.log('  The sum of game ids possible with 12R, 13G, and 14B cubes:', brightGreen(bold(`${gameIdSum}`)))
  console.log('  The sum of powers of games:', brightGreen(bold(`${gamePowerSum}`)))
}

function parseGames(games: string[]): Game[] {
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
        }, emptyDraw)
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
      power: multiplyArray(Object.values(minimums)),
    }
  })
}

function getPossibleGames(games: Game[]): Game[] {
  const impossibleGameIds = games
    .filter((game) => {
      return game.pulls.some(({ red, green, blue }) => {
        return red > MAX_RED || blue > MAX_BLUE || green > MAX_GREEN
      })
    })
    .map((game) => game.id)

  return games.filter((game) => !impossibleGameIds.includes(game.id))
}
