let star = "**********";
for(i=0; i<=7; i++) {
    document.write("<br>" + star);

}

let myBond = [45, 67,34, 56, 345, 556, 24, 24, 76, 34, 6567, 75, 88, 653, 8755, 3345, 67, 90];
let govtBond = [46, 34, 54, 345, 36, 75, 6567, 98, 90, 4444];
let winner = [];

for(i=0; i<myBond.length; i++){
    console.log("My Bond: ", myBond[i]);
    for(j=0; j<govtBond.length; j++){
        console.log("Govt. Bond: ", govtBond[j]);
        if(myBond[i] === govtBond[j]){
            winner.push(myBond[i]);
        }
    }
}

console.log(winner);