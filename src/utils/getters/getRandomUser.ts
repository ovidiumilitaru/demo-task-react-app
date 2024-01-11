// This function generate a random integer number between 1 and 10

export function getRandomUser(): string {
  return Math.ceil(Math.random() * 10).toString()
}