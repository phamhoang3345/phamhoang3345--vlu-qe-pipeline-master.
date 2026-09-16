function login(username, password) {
    // Kiểm tra username rỗng
    if (!username) {
        return false;
    }

    // Kiểm tra password rỗng
    if (!password) {
        return false;
    }

    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Kiểm tra username và password
    if (username === "admin" && password === "999") {
        return true;
    }

    return false;
}
// saw
module.exports = { login };
