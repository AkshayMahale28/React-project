function chai() {
    const username = "Akshay";
    console.log(this.username); // 'this' will refer to the global object (window in browsers)
}
chai(); // Output: undefined