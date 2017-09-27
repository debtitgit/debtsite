/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function(e) {
   
   
    $('#mail').on('keyup', function(){
    var valid = /^([\w-\.]+@([\w-]+\.)+[comorgin]{2,4})?$/.test(this.value) && this.value.length;
    $('#mail_div').html( (valid?'':' Invalid Email'));
	  
    var invalidChars = /[^a-zA-Z0-9._@-]/gi  
  var a=$(this).val();
  
  console.log(a);
  $(this).val(a)
  if(a.match(invalidChars)) 
  {
      a = a.replace(invalidChars,""); 
       
      $(this).val(a)
  }
  
});
$('#mail').on('change',function()
{
var a =$("#mail").val();
a=a.toUpperCase();
});
});