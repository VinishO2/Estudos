#include <stdio.h>

int main(){
	float v1, v2;
	float resultado;
	char operacao;
	
	printf("Digite um numero: ");
	scanf ("%f", &v1);
	
	printf("Digite outro numero: ");
	scanf("%f", &v2);
	
	
	printf("Escolha uma das operacoes: [S] Soma | [P] Subtracao | [M] Multiplicacao | [D] Divisao\n");
	printf("Digite a operacao: ");
	scanf ("%s", &operacao);
	
	if(operacao == 'S'){
		resultado = v1 + v2;
	} else if (operacao == 'P'){
		resultado = v1 - v2;
	} else if (operacao == 'M'){
		resultado = v1 * v2;
	} else if (operacao == 'D'){
		resultado = v1 / v2;
	};
	
	printf ("O resultado dessa operacao e %f", resultado);
	
	return 0;
} 
