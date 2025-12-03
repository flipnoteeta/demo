function copyText() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  alert("The flipnote link has been copied > " + copyText.value);
}