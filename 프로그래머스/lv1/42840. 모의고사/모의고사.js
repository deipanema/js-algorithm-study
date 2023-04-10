function solution(answers) {
  const answer = [];

  const spj1 = [1, 2, 3, 4, 5];
  const spj2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const spj3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const check1 = answers.filter((a, i) => a === spj1[i % spj1.length]).length;
  const check2 = answers.filter((a, i) => a === spj2[i % spj2.length]).length;
  const check3 = answers.filter((a, i) => a === spj3[i % spj3.length]).length;

  const max = Math.max(check1, check2, check3);

  if (check1 === max) answer.push(1);
  if (check2 === max) answer.push(2);
  if (check3 === max) answer.push(3);

  return answer;
}