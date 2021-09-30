var passcode = null;
while (passcode === null) {
  passcode = prompt("Enter your passcode in the blank below:");
}

var user = null;

if (passcode === "6023") {
  user = "Firetop";
} else {
  if (passcode === "6721") {
    user = "Clmcginn1";
  } else {
    if (passcode === "1460") {
      user = "Eliza";
    } else {
      if (passcode === "7107") {
        user = "Wesley";
      } else {
        if (passcode === "2375") {
          user = "Gladys";
        } else {
          if (passcode === "8265") {
            user = "Louisa";
          } else {
            user = null;
            alert(
              "Your passcode was not correct.  Please reload and try again."
            );
          }
        }
      }
    }
  }
}
if (user !== null) {
  alert("Welcome, " + user + "!");
}
