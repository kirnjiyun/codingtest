function solution(cipher, code) {
    var decrypted = '';

    for (var i = code - 1; i < cipher.length; i += code) {
        decrypted += cipher[i];
    }

    return decrypted;
}
