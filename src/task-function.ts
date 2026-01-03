// Student型を定義
type Student = {
  name: string;
  score: number; // 数値であることを明示
};

// 関数に型注釈を付ける
const getResultMessage = (student:Student) : string => {
 if (student.score >= 60) {
   return `${student.name}さんは合格です。`;
 } else {
   return `${student.name}さんは不合格です。`;
 }
};

// 正しいデータ
const studentA = {
 name: '侍太郎',
 score: 70,
};

const resultMessage = getResultMessage(studentA);

console.log(resultMessage);