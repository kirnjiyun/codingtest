function solution(my_string, is_suffix) {
  const slicedSuffix = my_string.slice(-is_suffix.length);
  return slicedSuffix === is_suffix ? 1 : 0;
}
