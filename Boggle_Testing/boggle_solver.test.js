const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe('Boggle Solver tests suite:', () => {
  describe('Normal input', () => {

    test('3X3 grid', () => {
      let grid = [['G', 'I', 'Z'],
                  ['U', 'E', 'K'],
                  ['Q', 'S', 'E']];
      let dictionary = ["geeks", "for", "quiz", "go", "gieug"];
      let expected = ["geeks", "quiz"];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("4x4 case", () => {
      let grid = [
        ["Y", "E", "H", "P"],
        ["D", "O", "T", "W"],
        ["C", "A", "L", "Q"],
        ["I", "M", "J", "S"],
      ];
      let dictionary = ["dot", "slot", "ice", "mam"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["dot", "slot"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });


    test("5x5 case", () => {
      let grid = [
        ["A", "B", "C", "D", "E"],
        ["J", "I", "H", "G", "F"],
        ["K", "L", "M", "N", "O"],
        ["T", "S", "R", "Q", "P"],
        ["U", "V", "W", "X", "Y"],
      ];
      let dictionary = ["abc", "mqn", "ypxw", "def", "yuv", "xyz"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["abc", "mqn", "ypxw", "def"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });


  describe('Problem contraints', () => {
    // Cases such as Qu
    test("QU case", () => {
      let grid = [
        ["QU", "A", "K"],
        ["S", "B", "E"],
        ["L", "O", "W"],
      ];
      const dictionary = ["quake", "bake", "slow", "bo"];
      const expected = ["quake", "bake", "slow"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("Empty case", () => {
      let grid = [[""], [""]];
      let dictionary = [];
      let expected = [];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("NxM case", () => {
      let grid = [["T", "H", "R"], 
                  ["E", "E"]
                ];
      let dictionary = ["three", "the", "here"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = [];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

     test("Duplicate letters case", () => {
      let grid = [
        ["A", "B"],
        ["B", "C"],
      ];
      let dictionary = ["abb", "abc", "ac"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["abb", "abc"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });

  
  describe('Input edge cases', () => {

    // Example Test using Jess
    test('Dictionary is empty', () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [['A', 'B', 'C', 'D'],
                    ['E', 'F', 'G', 'H'],
                    ['I', 'J', 'K', 'L'],
                    ['M', 'N', 'O', 'P']];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
});
