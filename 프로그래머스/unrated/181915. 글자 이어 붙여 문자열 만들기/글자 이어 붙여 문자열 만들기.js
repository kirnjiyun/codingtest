function solution(my_string, index_list) {
    let result = "";

    for (let index of index_list) {
        if (index >= 0 && index < my_string.length) {
            result += my_string.charAt(index);
        }
    }

    return result;
}
