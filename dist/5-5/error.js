"use strict";
/*try {
    console.log('エラーを発生させます');
    throwError();
} catch (err) {
    console.log('エラーをキャッチしました');
    console.log(err);
} finally {
    console.log('finallyブロック');
}
function throwError() {
    const error = new Error('エラー発生!!');
    throw error;
}
console.log('おわり');*/
class EmptyArrError extends Error {
}
function throwError() {
    throw new EmptyArrError;
}
try {
    throwError();
}
catch (err) {
    if (err instanceof EmptyArrError) {
        console.log('EmptyArrErroが発生');
    }
    else {
        throw err;
    }
}
