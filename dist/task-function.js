"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 関数に型注釈を付ける
const getResultMessage = (student) => {
    if (student.score >= 60) {
        return `${student.name}さんは合格です。`;
    }
    else {
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
