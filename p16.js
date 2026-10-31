let n = 4;

let row=[];

for(let i=0;i<n;i++){

    for(let j=n;j>i;j--){
        process.stdout.write(" ");
    }

    // for(let k=1;k<=i;k++){
    //     process.stdout.write((i).toString() + " ");
    // }
    // Build the row values from back to front
    // Each element is the sum of the element above it and to its left

    for (let k = i; k >= 0; k--) {
        if (k === 0 || k === i) {
            row[k] = 1; // The edges of Pascal's triangle are always 1
        } else {
            row[k] = row[k] + row[k - 1]; // Sum of the two numbers above
        }
        process.stdout.write(row[k] + " ");
    }
    console.log();
}


// for(let i=1;i<n;i++){

//     for(let j=n;j>i;j--){
//         process.stdout.write(" ");
//     }

//     for(let k=1;k<=i;k++){
//         process.stdout.write((i).toString() + " ");
//     }
//     console.log();

// }