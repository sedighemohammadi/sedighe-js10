// According to your js10 session, write a code that shows why we shouldn't use var?
function exampless() {
    if (true) {
        var t = 10; // x در کل تابع قابل دسترسی است
    }
    console.log(t); // 10
}

exampless();
