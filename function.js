const esPalindromo = palabra => {
    const limpia = palabra.toLowerCase().replace(/[^a-z0-9]/g, '');
    const invertida = limpia.split('').reverse().join('');
    return limpia === invertida;
  };

  module.exports = esPalindromo