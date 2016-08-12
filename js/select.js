/*
var fu=$('div.selectBox').children('span.selected').html($('div.selectBox').children('div.selectOptions').children('span.selectOption:first')).text();
var fu1=$('div.selectBox').children('span.selected1').html($('div.selectBox').children('div.selectOptions1').children('span.selectOption1:first')).text();       
alert($fu);
*/
	   $(document).ready(function() {
            enableSelectBoxes();
        });

        function enableSelectBoxes(){
			var $container = $('#Container');
  $container.mixItUp();

	$('div.selectBox').each(function(){
                $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
				$(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));

                $(this).children('span.selected,span.selectArrow').click(function(){
                    if($(this).parent().children('div.selectOptions').css('display') == 'none'){
						        $(".selectOptions1").hide();
                        $(this).parent().children('div.selectOptions').css('display','block');
                    }
                    else
                    {
                        $(this).parent().children('div.selectOptions').css('display','none');
                    }
                });
				
				
				 $(this).children('span.selected1').html($(this).children('div.selectOptions1').children('span.selectOption1:first').html());
                $(this).attr('value',$(this).children('div.selectOptions1').children('span.selectOption1:first').attr('value'));

                $(this).children('span.selected1,span.selectArrow').click(function(){
                    if($(this).parent().children('div.selectOptions1').css('display') == 'none'){
						        $(".selectOptions").hide();
                        $(this).parent().children('div.selectOptions1').css('display','block');
                    }
                    else
                    {
                        $(this).parent().children('div.selectOptions1').css('display','none');
                    }
                });

				//topics
                $(this).find('span.selectOption').click(function(){
                    $(this).parent().css('display','block');
					$(this).closest('div.selectBox').attr('value',$(this).attr('value'));
					$(this).parent().siblings('span.selected').html($(this).html()).text();
					$b=$(this).closest('div.selectBox').attr('value');
					$container.mixItUp('filter',$b);
					
					
					$c=$(this).closest('span.selectOption').attr('type');
					
						//hiding after click
					$(".selectOptions").hide();
$(".selected1").text("Choose Module Bundle");

					
					//change text
					$("span.selected").text($c);

                    $(this).parent().siblings('span.selected').html($(this).html());
				});
				

				//bundles
				$(this).find('span.selectOption1').click(function(){
                    $(this).parent().css('display','block');
					$(this).closest('div.selectBox').attr('value',$(this).attr('value'));
					$(this).parent().siblings('span.selected1').html($(this).html()).text();
					$b=$(this).closest('div.selectBox').attr('value');
					$container.mixItUp('filter',$b);
					
					
					$c=$(this).closest('span.selectOption1').attr('type');
					

					//hiding after click
					$(".selectOptions1").hide();
					
$(".selected").text("Select a Catagory");

					//change text
					$("span.selected1").text($c);
					//$("span.selected").text($fu);

                    $(this).parent().siblings('span.selected1').html($(this).html());
				});

				
            });             
        }

$(document).mouseup(function (e)
{
    var container = $(".selectBox");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) 
    {
        $(".selectOptions").hide();
		        $(".selectOptions1").hide();

    }
});