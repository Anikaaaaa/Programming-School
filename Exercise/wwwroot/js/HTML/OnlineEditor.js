
$(document).ready(function () {
   ace.require("ace/ext/language_tools");
   var editor = ace.edit("editor");
   editor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true
   });

   editor.getSession().setMode("ace/mode/html")
   editor.setTheme("ace/theme/xcode")

   $(document).on("click", "#run", function () {
      var code = editor.getValue();
      $("#output").html(code);
   });

   $(document).on("click", "#clear", function () {
      editor.setValue("", 0);
      $("#output").html("");
   });
   alert(isBanglaSelected);
});