function steps(n) {
    for (let i = 1; i <= n; i++) {
        let step = '';
        for (let j = 1; j <= i; j++) {
            step += '#';
        }
        console.log(step);
    }
}

steps(2); 
// #
// ##
steps(3); 
// #
// ##
// ###

