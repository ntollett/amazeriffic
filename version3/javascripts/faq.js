var main = function () {
    
    var q1 = "<h2>Question 1</h2><p>Here's the answer to Question 1.</p>";
    var q2 = "<h2>Question 2</h2><p>Here's the answer to Question 2.</p>";
    var q3 = "<h2>Question 3</h2><p>Here's the answer to Question 3.</p>";
    
    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);
        
        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;
                
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            
            if ($element.parent().is(":nth-child(1)")) {
                $content = q1;
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = q2;
            } else if ($element.parent().is(":nth-child(3)")) {
                $content = q3;
            }
            $("main .content").append($content);
            return false;
        });
    });
    $(".tabs a:first-child span").trigger("click");
    };
$(document).ready(main);