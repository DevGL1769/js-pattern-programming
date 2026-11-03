let n = 5;

for(let i=n;i>0;i--){

    if(i===n){
        for(let k=1;k<n;k++){
            process.stdout.write("* ");
        }
    }

    for(let j=n;j>i;j--){
        process.stdout.write(" ");
    }

    process.stdout.write("* ");

    if(i<n){
        
        for(let k=1;k<i-1;k++){
            process.stdout.write("  ");
        }

        if (i > 1) {
            process.stdout.write("*");
        }
    }
    console.log();
}