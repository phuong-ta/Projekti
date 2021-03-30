function validateForm() {
    var name = document.forms["myForm"]["fname"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var problem = document.forms["myForm"]["problem"].value;
    var content = document.forms["myForm"]["content"].value;
    var reply = document.forms["myForm"]["reply"].value;

    if (name == "") {
      alert("Name must be filled out");
      return false;
    } else  if (email == "") {
        alert("Email must be filled out");
        return false;
      }else  if (phone == "") {
        alert("phone must be filled out");
        return false;
      }else  if (problem == "") {
        alert("problem must be filled out");
        return false;
      }else  if (content == "") {
        alert("Content must be filled out");
        return false;
      }else  if (reply == "") {
        alert("Reply must be filled out");
        return false;
      } else{
          alert(" Kiitos viestistäsi! Otamme yhteyttä sinuun mahdollisimman pian")
      }
}