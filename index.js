class Noticia{
	constructor(titulo, dataPubli, resumo, texto){
		this.titulo = titulo;
		this.dataPubli = dataPubli;
		this.resumo = resumo;
		this.texto = texto;
	}

	mostrarNoticia(){
		console.log(this.titulo + "\n" + this.dataPubli + "\n" + this.resumo + "\n\n" + this.texto);
	}
}

let not = new Noticia(
	"Prisão de Aluno do IFMS Nova Andradina",
	"24/03/2022",
	"Aluno Anderson Oliveira, em um acesso de fúria, destruiu um dos computadores da instituição e foi apreendido.",
	"Após entrar em fúria completa por perder em jogos eletrônicos online e quebrar um computador da instituição através de socos, Anderson Oliveira, da INFO 3A, foi apreendido hoje de manhã."
);

not.mostrarNoticia();