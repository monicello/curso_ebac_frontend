const alunos = [
    { nome: "Mônica", nota: 7.5 },
    { nome: "Michelle", nota: 9.0 },
    { nome: "Joaquim", nota: 6.0 },
    { nome: "Paula", nota: 3.0 },
    { nome: "Augusto", nota: 5.5 },
  ];
  
  const alunosAprovados = alunos => alunos.filter(aluno => aluno.nota >= 6);
  
  console.log(alunosAprovados(alunos));