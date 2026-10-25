import { solveLocally, normalizeMathString, diagnoseTopic } from '../src/utils/localSolver.ts';

const testCases = [
  // 1. Spoken & typos
  "x+1  teng3",
  "x+1 teng 3",
  "2x teng 8",
  "y teng x kvadrat",
  "yteng x^+1",
  "x kvadrat minus 5x teng minus 6",
  "x ning kvadrati teng 25",
  "ikki x qo'shilgan uch teng to'qqiz",

  // 2. Cyrillic homoglyphs (Common in Uzbekistan!)
  "х + 1 = 3", // Cyrillic х
  "у = х^2",   // Cyrillic у and х
  "х^2 - 4 = 0",

  // 3. Equations
  "x^2 - 5x + 6 = 0",
  "2x^2 + 3x - 5 = 0",
  "x^2 - 9 = 0",
  "x^2 = 16",
  "x^2 + 4 = 0", // Complex roots or no real roots
  "x^2 - 4x + 4 = 0", // Double root
  "3x + 5 = 20",
  "5 = 2x + 1",
  "2x = 0",
  "x/2 + 3 = 7",

  // 4. Functions / Graphing
  "y = x^2",
  "y = x^2 - 4x + 3",
  "y = -x^2 + 4",
  "y = 2x + 1",
  "f(x) = x^3 - 3x",
  "y = 1/x",
  "y = sin(x)",
  "x^2 - 4", // expression without y=

  // 5. Derivatives
  "d/dx (x^3 * sin(x))",
  "d/dx (x^2 + 5x)",
  "hosilasi (x^4 + 3x^2)",
  "(x^3)'",

  // 6. Integrals
  "int x^2 dx",
  "\\int x * cos(x) dx",
  "integral (3x^2 + 2x)",
  "\\int 1/(1+x^2) dx",

  // 7. Limits
  "lim (x->0) sin(x)/x",
  "lim (x->0) (1 - cos(x))/x^2",
  "lim (x->2) (x^2 - 4)/(x - 2)",
  "lim (x->inf) (1 + 1/x)^x",

  // 8. Linear Systems (Kramer)
  "2x + y = 7, x - y = 2",
  "x + y = 10, x - y = 4",
  "3x - 2y = 1, 2x + 3y = 18",

  // 9. Differential Equations
  "y' = 3x^2",
  "y' - 2y = 0",
  "y'' - 5y' + 6y = 0",
  "y'' + 4y = 0",

  // 10. Complex Numbers
  "(1 + 2i) + (3 - 4i)",
  "(2 + 3i) * (1 - 2i)",
  "(1 + i)^4",
  "(1 + i*sqrt(3))^6",

  // 11. Vectors
  "(1, 2, 3) * (4, 5, 6)",
  "(1, 0, 0) x (0, 1, 0)",
  "[2, -1, 3] * [1, 4, -2]",
  "|(3, 4)|",
  "|(1, 2, 2)|",
  "vektor (3, 4, 0)",

  // 12. Matrices
  "[[1, 2], [3, 4]]",
  "[[2, 1, -1], [3, 0, 2], [1, -2, 1]]",
  "[[1, 2], [3, 4]] * [[2, 0], [1, 2]]",
  "[[1, 2], [3, 4]] + [[5, 6], [7, 8]]",

  // 13. Inequalities (Linear & Quadratic)
  "2x - 4 > 0",
  "3x + 6 <= 0",
  "-2x + 8 > 0",
  "x^2 - 4 > 0",
  "x^2 + 4 > 0",

  // 14. Modulus, Radical, Logarithm Equations
  "|x - 3| = 5",
  "abs(2x + 1) = 7",
  "sqrt(x + 1) = 3",
  "ildiz(x) = 25",
  "ln(x) = 2",
  "log_2(x) = 4",
  "lg(x) = 3"
];

console.log(`Running comprehensive test suite with ${testCases.length} cases...\n`);

let passed = 0;
let failed = 0;
const failures = [];

for (const tc of testCases) {
  try {
    const res = solveLocally(tc);
    if (res && res.solved) {
      passed++;
      console.log(`✅ PASS: "${tc}" -> [${res.type}] Short: ${res.shortAnswer}`);
    } else {
      failed++;
      failures.push({ input: tc, reason: "res.solved is false", diagnosis: res?.diagnosis?.topicName });
      console.log(`❌ FAIL: "${tc}" -> Solved: false (Topic: ${res?.diagnosis?.topicName || 'None'})`);
    }
  } catch (err) {
    failed++;
    failures.push({ input: tc, reason: err.message });
    console.log(`💥 ERROR: "${tc}" -> ${err.message}`);
  }
}

console.log(`\n========================================`);
console.log(`Test Summary: Passed: ${passed}/${testCases.length} | Failed: ${failed}/${testCases.length}`);
console.log(`========================================\n`);

if (failures.length > 0) {
  console.log("Failures to fix:");
  failures.forEach(f => console.log(` - "${f.input}": ${f.reason} (Topic: ${f.diagnosis})`));
}
