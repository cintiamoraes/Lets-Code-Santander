const matriz =[
    [1,2,3,4,5,6],
    [6,5,4,3,2,1],
    [6,1,5,2,3,4]
];

const somacoluna = (estado, item)=>{
    return [estado[0]+item[1], estado[1]+item[2]+item[3], estado[2]+item[2]+item[1]]
};

const vetor2 = matriz.reduce(somacoluna, [0,0,0,]);

console.log(vetor2);

