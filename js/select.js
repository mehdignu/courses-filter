        $(document).ready(function() {
            enableSelectBoxes();
        });

        function enableSelectBoxes(){
			var       $container = $('#Container');
  $container.mixItUp();

            $('div.selectBox').each(function(){
                $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
                $(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));

                $(this).children('span.selected,span.selectArrow').click(function(){
                    if($(this).parent().children('div.selectOptions').css('display') == 'none'){
                        $(this).parent().children('div.selectOptions').css('display','block');
                    }
                    else
                    {
                        $(this).parent().children('div.selectOptions').css('display','none');
                    }
                });

                $(this).find('span.selectOption').click(function(){
                    $(this).parent().css('display','block');
					$(this).closest('div.selectBox').attr('value',$(this).attr('value'));
					$(this).parent().siblings('span.selected').html($(this).html()).text();
					$b=$(this).closest('div.selectBox').attr('value');
					$container.mixItUp('filter',$b);
					
                    $(this).parent().siblings('span.selected').html($(this).html());
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
    }
});