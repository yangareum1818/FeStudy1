// 핸드폰 정규식
export const regexPhone = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/;
// 이메일 정규식
export const regexEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
// 비밀번호 정규식 (영문, 숫자, 특수기호 조합으로 8-20자리 이상)
export const regexPassword =
  /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;