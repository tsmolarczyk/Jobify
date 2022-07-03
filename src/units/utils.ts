export const parseDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; // YYYY-MM-DD 2021-03-05
};

// 1. Przetestuj funkcje (zwroc uwage na edge kejsy)
// 2. Napisz komponent, który wyswietla date z propsa <Date date={new Date} />
// 3. Zamockuj tak parseDate zeby zawsze zwracala "Ala ma kota"
// 4. Przetestuj input (test czy wyswietla sie error, czy wykonuje sie onChange na kazdym wpisaniu czegos)
// 5. Przeczytaj o jest.mock oraz jest.fn()
