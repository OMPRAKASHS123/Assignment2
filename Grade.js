function Grades(x){
    switch(true){
        case x>=90:
            console.log("S");
            break;
        case x>=80:
            console.log("A");
            break;
        case x>=70:
            console.log("B");
            break;
        case x>=60:
            console.log("C");
            break;
        case x>=50:
            console.log("D");
            break;
        case x>=40:
            console.log("E");
            break;
        case x>=0:
            console.log("student has failed");
            break;
        default:
            console.log("Invalid marks")

    }
}
Grades(30);