function jumpCase(num) {
	var answer = 0;
  if(num==1)
    return 1;
  else if(num==2)
    return 2;
 	answer = jumpCase(num - 1) + jumpCase(num - 2);
	return answer;
}

//아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(jumpCase(4));

