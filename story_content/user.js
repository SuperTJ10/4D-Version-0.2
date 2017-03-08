function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6YTpIvgtTGB":
        Script1();
        break;
  }
}

function Script1()
{
  
var email="sotim07@aol.com";
var subject="4D Assessment Results";
var body_start="Dear Matt    These are the details from my self assessment. I would appreciate if you could review.";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

