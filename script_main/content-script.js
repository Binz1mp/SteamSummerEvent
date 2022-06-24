let mainbody = document.querySelector("body");
let morebutton = document.querySelector("button.saleitembrowser_ShowContentsButton_3d9cK.Focusable");
let sizerbutton = $('<button id = "steamsummerbutton">STEAMSUMMER</button>');
function clickmore() {
  $('div.saleitembrowser_ShowContentsContainer_3IRkb').find('button').trigger('click');
  console.log("더보기누름");
}
if (window.location.href.indexOf("steampowered.com/category/") > -1 || window.location.href.indexOf("steampowered.com/vr/") > -1) {
  $('body').prepend(sizerbutton);
  sizerbutton.on("click", function () {
    if (mainbody.innerText.includes('TH.4X')) {
      alert("응애 찾았으니 잘 스크롤 내려보이소");
    } else {
      clickmore()
    }
  });
}