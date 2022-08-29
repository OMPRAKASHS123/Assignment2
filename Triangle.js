function Triangle(a,b,c){
        if(a==b && (b==c) && (c==a)){
            console.log("It is an equilateral Triangle");
        }else if((a!=b) && (b!=c)){
            console.log("It is a scalene Traingle");

        }else{
            console.log("It is an Isosceles Triangle");
        }

    }

Triangle(5,5,3);