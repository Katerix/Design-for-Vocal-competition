//document.addEventListener("navi", navigation);

function scrollDetect()
{
  var lastScroll = 0; let result;

  window.onscroll = function()
  {
      let currentScroll = window.scrollTop;

      if (currentScroll > 0 && lastScroll <= currentScroll)
      {
        lastScroll = currentScroll; 
        result = "down";
      } 
      else if(currentScroll > 0 && lastScroll >= currentScroll)
      {
        lastScroll = currentScroll;
        result = "up";
      }
  };

  return result;
}


function navigation()
{
  while(true)
  {
    var dir = scrollDetect();

    if(dir == "down" && window.pageYOffset > 0 && window.pageYOffset < 769)
    {
      window.scrollTo(0,765);
    }

    else if(dir == "up" && window.pageYOffset < 1538 && window.pageYOffset > 769)
    {
        window.scrollTo(0,0);
    }
  }
}

function goToStart()
{
  window.scrollTo(0,0);
}

function goToApply()
{
  window.scrollTo(0,768);
}

function goToFooter()
{
  window.scrollTo(0, 1100);
}

