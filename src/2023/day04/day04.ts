import { printAnswer, printTitle, sumArray } from '/utils.ts'

const dataFilePath = './src/2023/day04/data.txt'

type Card = {
  cardId: number
  winningCardNumbers: number[]
  cardPoints: number
}

export default function run() {
  const rawCardData = Deno.readTextFileSync(dataFilePath).split('\n')

  const cards = rawCardData.map((dataLine) => parseCard(dataLine))
  const originalCardPoints = cards.map((c) => c.cardPoints)
  const totalNumberOfCards = getNumberOfCopiedCards(cards)

  printTitle('Day 04 - Scratchcards')
  printAnswer('The original cards are worth', sumArray(originalCardPoints))
  printAnswer('The total number of cards is', totalNumberOfCards)
}

function parseNumString(numString: string): number[] {
  return numString
    .split(' ')
    .map((num) => parseInt(num))
    .filter((num) => !Number.isNaN(num))
}

function checkWinningNumbers(winningNumbers: number[], cardNumbers: number[]): number[] {
  return winningNumbers.filter((winningNumber) => cardNumbers.includes(winningNumber))
}

function calculatePoints(winningCardNumbers: number[]) {
  return winningCardNumbers.reduce((points) => {
    return points < 1 ? 1 : points * 2
  }, 0)
}

function parseCard(cardData: string): Card {
  const [cardIdSection, numbersSection] = cardData.split(': ')

  const cardIdStr = cardIdSection.match(/\d+/g)?.[0]
  if (cardIdStr == null) throw new Error('No card ID found')
  const cardId = parseInt(cardIdStr)

  const [winningNumbersStr, cardNumbersStr] = numbersSection.split(' | ')
  const winningNumbers = parseNumString(winningNumbersStr)
  const cardNumbers = parseNumString(cardNumbersStr)
  const winningCardNumbers = checkWinningNumbers(winningNumbers, cardNumbers)
  const cardPoints = calculatePoints(winningCardNumbers)

  return {
    cardId,
    winningCardNumbers,
    cardPoints,
  }
}

function getNumberOfCopiedCards(cards: Card[]): number {
  const cardCopies = Array<number>(cards.length).fill(1)

  for (let currentCardIndex = 0; currentCardIndex < cardCopies.length; currentCardIndex++) {
    const quantityOfCurrentCard = cardCopies[currentCardIndex]
    const copiesToApply = cards[currentCardIndex].winningCardNumbers.length

    for (let x = 1; x < copiesToApply + 1; x++) {
      cardCopies[x + currentCardIndex] += quantityOfCurrentCard
    }
  }

  return sumArray(cardCopies)
}
