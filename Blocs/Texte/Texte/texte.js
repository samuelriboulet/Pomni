Blockly.Blocks['texte__texte'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"")
        .appendField(new Blockly.FieldTextInput("texte"), "TEXT")
        .appendField("\"");
    this.setInputsInline(false);
    this.setOutput(true, ["String", "Number"]);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
