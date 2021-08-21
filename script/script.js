$(function(){

    // gnb 메뉴 mouseover, mouseout
    $("li.package_class").mouseover(function(){
        $(this).children("div.subMenu").css({
            "display" : "flex"
        });
        $("div#gnbBG").css({
            "display" : "block"
        });
        $("img#arrowMark").attr("src", "images/arrow_Icon-2.png")
    });
    
    $("li.package_class").mouseout(function(){
        $(this).children("div.subMenu").css({
            "display" : "none"
        });
        $("div#gnbBG").css({
            "display" : "none"
        });
        $("img#arrowMark").attr("src", "images/arrow_Icon-1.png")
    });

    // placeholder 위치 이동
    $(".must_required_info input").focusin(function(){
        $(this).prev("div.placeholderText").css({
            "color" : "#08d698"
        });
        $(this).parents(".inputArea").css({
            "border-bottom" : "1px solid #08d698"
        });
        $(this).prev("div.placeholderText").animate(
            {
                "top" : "-10px"
                ,"font-size" : "11px"
            }
            , 300
        );

    });
    $(".must_required_info input").focusout(function(){
        $(this).prev("div.placeholderText").css({
            "color" : "#ddd"
        });
        $(this).parents(".inputArea").css({
            "border-bottom" : "1px solid #ddd"
        });
        $(this).prev("div.placeholderText").animate(
            {
                "top" : "10px"
                ,"font-size" : "13px"
            }
            ,300
        );
    });

    $("input#checkAll").click(function(){
        if($(this).prop("checked")) {
            $(".checklist").prop("checked", true);
        } else {
            $(".checklist").prop("checked", false);
        }
    });
});