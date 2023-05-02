//<![CDATA[
function goBack() {
    history.go(-1);
}

function onGoBack() {
  console.log("Gone back");
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let goingBack = browser.tabs.goBack();
goingBack.then(onGoBack, onError);
//]]>