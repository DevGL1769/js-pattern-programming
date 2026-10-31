let n = 10;
let counter = 1;

for(let i=1;i<(n/2);i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(counter.toString() + " ");
        counter++;
    }
    console.log();
}