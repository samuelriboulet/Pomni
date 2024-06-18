Blockly.Blocks['texte_ecrire'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(["String", "Number"])
        .appendField("ecrire");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
