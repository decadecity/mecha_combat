      // Should be quite cleasr from the below that I couldn't work out
      // how to restart the loop. 
      var hellip = [
          "W", "Wa", "Wai", "Wait", "Waiti", "Waitin", "Waiting", "Waiting ",
          "f", "fo", "for", "for ",
          "O", "Op", "Opp", "Oppo", "Oppon", "Oppone", "Opponen", "Opponent",
          ".", "..", "...", "...."
      ];
      
      function doSetTimeout(i) {
        setTimeout(function () {
          document.getElementById("hellip").innerHTML = hellip[i]
        }, i * 500)
      }

      for (var i = 0; i < hellip.length; i++) {
        doSetTimeout(i);
      }