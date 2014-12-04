ctrl.startup = function()  {
    $(".contactForm").animate({top:$(window).height()-32},0);   

    if ('<%=bi.client.category%>' === 'mobile') {    
      mobileContact();
    }
    else if ('<%=bi.client.category%>' === 'tablet') {
      tabletContact();
    }
    else {
      sideBarClick();
    }; 
};

function tabletContact(){
      var defaultWidth = '210px';
      var openWidth = $(window).width()-60;
      var defaultHeight = $(window).height()-60;
      var openHeight = '500px';
      var time = 100;
      ctrl.sel(".down").hide(); 
      ctrl.sel(".up").hide();

      ctrl.sel(".contactForm").css('width', defaultWidth); 
      ctrl.sel(".contactForm").animate({top: defaultHeight}, time); 
      ctrl.sel(".contactForm").addClass('tablet'); 
      
      ctrl.sel(".contactTitle").click(function(event){          
          ctrl.sel(".contactForm").css('width', openWidth);
          ctrl.sel(".contactForm").animate({height: openHeight}, time, null ,function() {
            window.scroll(0, window.pageYOffset + 500);
          });
          ctrl.sel(".up").hide(); 
          ctrl.sel(".down").show();
          ctrl.sel(".contactContent").css ('display', 'block');  
      });

      ctrl.sel(".down").click(function(event){
          ctrl.sel(".contactForm").css('width', defaultWidth);
          ctrl.sel(".contactForm").animate({top: defaultHeight}, time);  
          ctrl.sel(".down").hide(); 
          ctrl.sel(".up").hide(); 
          ctrl.sel(".contactContent").css('display', 'none'); 
          ctrl.sel(".contactForm").css('height', '60px');   
      });
}

function mobileContact(){
      var defaultWidth = '250px';
      var openWidth = $(window).width()-60;
      var defaultHeight = $(window).height()-60;
      var openHeight = '550px';
      var time = 100;
      ctrl.sel(".down").hide(); 
      ctrl.sel(".up").hide();

      ctrl.sel(".contactForm").css('width', defaultWidth); 
      ctrl.sel(".contactForm").animate({top: defaultHeight}, time); 
      ctrl.sel(".contactForm").addClass('mobile'); 
      
      ctrl.sel(".contactTitle").click(function(event){          
          ctrl.sel(".contactForm").css('width', openWidth);
          ctrl.sel(".contactForm").animate({height: openHeight}, time, null ,function() {
            window.scroll(0, window.pageYOffset + 550);
          });
          ctrl.sel(".up").hide(); 
          ctrl.sel(".down").show();
          ctrl.sel(".contactContent").css ('display', 'block');  
      });

      ctrl.sel(".down").click(function(event){
          ctrl.sel(".contactForm").css('width', defaultWidth);
          ctrl.sel(".contactForm").animate({top: defaultHeight}, time);  
          ctrl.sel(".down").hide(); 
          ctrl.sel(".up").hide(); 
          ctrl.sel(".contactContent").css('display', 'none'); 
          ctrl.sel(".contactForm").css('height', '75px');   
      });
};

function sideBarClick(){
    ctrl.sel(".down").hide();
    ctrl.sel(".up").click(function(event){ 
        ctrl.sel(".contactForm").animate({top:$(window).height()-280},100);           
        ctrl.sel(".down").show();
        ctrl.sel(".up").hide();       
    });
    ctrl.sel(".down").click(function(event){
        ctrl.sel(".contactForm").animate({top:$(window).height()-32},100);       
        ctrl.sel(".up").show();
        ctrl.sel(".down").hide();
    });       
};

ctrl.send = function() {
      var pdata, req = {};

      if ( !!validator() ) {
        alert("請輸入完整資料");
        return false;
      }
      pdata = collectData();
      req.url = '/coim/contactUs/post',
      req.post = pdata;
      var options = {
        url: '/_api/post',
        type: 'POST',
        data: JSON.stringify(req),
        processData: false,
        contentType: 'application/json'
      };
      $.ajax(options).done(function(data) {
        alert('訊息已送出，我們會儘快與您聯繫');
        $(".contactForm").animate({top:$(window).height()-35},100);
        $(".up").show();
        $(".down").hide();
        document.getElementById('sendQA').reset();
      });
};

function validator() {
    var name = $('input[name="name"]').val(),
        email = $('input[name="mail"]').val(),
        title = $('input[name="sub"]').val(),
        summary = $('textarea[name="massage"]').val();
    return (name === "" || email === "" || title === "" || summary === "");
};
    
function collectData() {
  var name = $('input[name="name"]').val(),
      email = $('input[name="mail"]').val(),
      title = $('input[name="sub"]').val(),
      summary = $('textarea[name="massage"]').val();
  return {"name": name, "email": email, "title": title, "summary": summary};
};