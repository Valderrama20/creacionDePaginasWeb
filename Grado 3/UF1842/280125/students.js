const students = [
    {
        nombre: "Juan Pérez",
        notas: [85, 72, 90, 67, 98]
    },
    {
        nombre: "María López",
        notas: [93, 88, 77, 82, 91]
    },
    {
        nombre: "Carlos Martínez",
        notas: [65, 57, 72, 80, 69]
    },
];

// Funcion para calcular el promedio de los estudiantes

const calcularPromedio = (notas) => notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

function estudiantesAprobados(students) {
    return students.map(({ nombre, notas }) => {
       let promedio = calcularPromedio(notas);

       return {
        nombre,
        promedio,
        aprobo: promedio >= 75
       };
    });
}

console.log(estudiantesAprobados(students));




