javascript.javascriptGenerator.forBlock['texte__texte'] = function(block, generator) {
  var text_text = block.getFieldValue('TEXT');
  // TODO: Assemble javascript into code variable.
  var code = '("")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.javascript.ORDER_NONE];
};
