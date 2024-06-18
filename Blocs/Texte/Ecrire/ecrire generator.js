javascript.javascriptGenerator.forBlock['texte_ecrire'] = function(block, generator) {
  var value_text = generator.valueToCode(block, 'TEXT', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = 'window.alert("")\n';
  return code;
};
