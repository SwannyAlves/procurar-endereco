export const CepMask = (prop: string) => {
  const teste = prop
    .replace(/\D/g, "") // Remove tudo o que não é dígito de forma global
    .replace(/(\d{5})(\d)/, "$1-$2") // sempre que tiver 5 numeros seguido de mais uma vai ser subistituido pela primeira captursa + um traço + a segunda captura
    .replace(/(-\d{3})\d+?$/, "$1"); // sempre que tiver um traço e 3 numeros vai ser substituido pela primeira captura
  return teste;
};
