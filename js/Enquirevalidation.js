/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 $(document).ready(function(e) {
   
    
          
$('.call').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.call > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

    

    $("#e_name5").keyup(function(e) 
    {
     var invalidChars = /[^a-z ]/gi

  var a=$(this).val();
  console.log(a)
  console.log(e)
  a= a.toUpperCase();
  console.log(a);
   a = a.replace(/\s\s+/g, ' '); 
   //a.search(/\s+/g);
  $(this).val(a)
  if(a.match(invalidChars)) 
  {
      a = a.replace(invalidChars,""); 
	 
        a = a.replace(/\s\s+/g, ' '); 
         
        
      $(this).val(a)
  }
	 
  
        //alert();
//      console.log(e)
//      if (e.shiftKey || e.ctrlKey || e.altKey) {
//        e.preventDefault();
//      } 
//      else 
//      {
//        var key = e.which;
//        console.log(key);
//        if (!((key === 8) || (key === 32) || (key === 9) || (key === 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
//          e.preventDefault();
//        }
//      }
    });
	
	 $('#mble').on('keyup', function(){
    var valid =/[^0-9]/gi
	if(this.value.length != 10){
    $('#mob_div').html( (valid?'':' Invalid mobileno'));
	}
    var invalidChars =  /[^0-9]/gi
  var a=$(this).val();
  
  console.log(a);
  $(this).val(a)
  if(a.match(invalidChars)) 
  {
      a = a.replace(invalidChars,""); 
	  a = a.replace(/\s\s+/g, ' '); 
       
      $(this).val(a)
  }
  
});
	
	
//  $("#mble").on("keyup", function(){
	  
	 
     //   var mobile = $('#mble').val();
     //   var pattern = /^[0-9]\d{10}$/;
    //    if (pattern.test(mobile)) {
           // alert("Your mobile number : " + mobile);
        //    return true;
     //   }
      //  alert("It is not valid mobile number.input 10 digits number!");
    //    return false;
    
//        var mobNum = $(this).val();
 //       var filter = /[^1-9]/gi
		

//          if (filter.test(mobNum)) {
//            if(mobNum.length==10){
              //    alert("valid");
//              $("#mobile-valid").removeClass("hidden");
//              $("#folio-invalid").addClass("hidden");
			  
//             } 
			
//			 else {
 //              alert('Please put 10  digit mobile number');
 //              $("#folio-invalid").removeClass("hidden");
//               $("#mobile-valid").addClass("hidden");
 //               return false;
 //             }
//			  if(mobNum.match(filter)) 
//			  {
//				 mobNum = mobNum.replace(filter,""); 
//					mobNum = mobNum.replace(/\s\s+/g, ' '); 
//				  $(this).val(mobNum)
//			  }
 //           }
			
 //           else {
            //  alert('Not a valid number');
   //           $("#folio-invalid").removeClass("hidden");
     //         $("#mobile-valid").addClass("hidden");
       //       return false;
         //  }
		   
		   
    
  //);
	
	
	
	
	
	
	
//	/^[0-9-+]+$/;

	
	
	
	
	
    
    // $("#mble").keyup(function (e) {
       
	//		var valid = /[^1-9]/gi
// $('#mob_div').html( (e?'':' Invalid Mobile no'));
		  

 //        var invalidChars = /[^1-9]/gi
 /// var a=$(this).val();
		  
//  console.log(a)
//console.log(e)
  
 // console.log(a);
 // $(this).val(a);
 // if(a.match(invalidChars)) 
 // {
  //    a = a.replace(invalidChars,""); 
  //      a = a.replace(/\s\s+/g, ' '); 
   //   $(this).val(a)
 // }
        
//        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
//          
//            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
//           
//            (e.keyCode >= 35 && e.keyCode <= 40)) {
//             
//                 return;
//        }
//     
//        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
//            e.preventDefault();
//        }
//if (this.value.length != 10) {
   // alert("length must be exactly 6 characters")
 // }
		   
       // });
        
              
  $("#pin").keyup(function (e) {
        
  var invalidChars = /[^0-9]/gi
  var a=$(this).val();
  console.log(a)
  console.log(e)
  a= a.toUpperCase();
  console.log(a);
  $(this).val(a)
  if(a.match(invalidChars)) 
  {
      a = a.replace(invalidChars,""); 
        a = a.replace(/\s\s+/g, ' '); 
      $(this).val(a)
  }
        });
        
        $("#adr").keyup(function (e) {
        
    var invalidChars = /[^a-z0-9.\/&#,;:\_@()- ]/gi  
  var a=$(this).val();
  console.log(a)
  console.log(e)
  a= a.toUpperCase();
  console.log(a);
  $(this).val(a)
  if(a.match(invalidChars)) 
  {
      a = a.replace(invalidChars,""); 
       
      $(this).val(a)
  }
        });
   $('.enquirybtn').click(function(){
     $(".form_right .form-control").each(function() {
         $(this).val('')
     })  
     $('.selectpicker').val('');
   }) 
});






  