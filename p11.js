let n = 10;

for(let i=0;i<n;i++){
    for(let j=n;j>i;j--){
        process.stdout.write(" ");
    }

    process.stdout.write("* ");

    if(i<n-1){
        
        for(let k=0;k<i-1;k++){
            process.stdout.write("  ");
        }

        if (i > 0) {
            process.stdout.write("* ");
        }
    }

    if(i===n-1){
        for(let k=1;k<n;k++){
            process.stdout.write("* ");
        }
    }
    console.log();
}


// for (let i = 0; i < n; i++) {
//     // 1. Print leading spaces for centering
//     for (let j = 0; j < n - i - 1; j++) {
//         process.stdout.write(" ");
//     }

//     // 2. Print stars and inner spaces for the current row
//     for (let j = 0; j <= i; j++) {
//         // Print a star at the left border (j === 0), right border (j === i), 
//         // or fill the entire base row (i === n - 1)
//         if (j === 0 || j === i || i === n - 1) {
//             process.stdout.write("* ");
//         } else {
//             // Print hollow spaces inside the pyramid
//             process.stdout.write("  ");
//         }
//     }
//     console.log();
// }