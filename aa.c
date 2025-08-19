#include <stdio.h>
#include <stdlib.h>

int main() {
    int v1;
    int v2;
    int v3;
    int soma;
    int media;

    printf ("Digite um numero ");
    scanf ("%d", &v1);

    printf ("Digite outro numero ");
    scanf("%d", &v2);

    printf ("Digite outro numero ");
    scanf("%d", &v3);

    soma = v1 + v2 + v3;
    media = (v1 + v2 + v3)/3;

    printf("O resultado é: %d", soma);
    printf("O resultado é: %d", media);

    return 0;
}