const pressKey = document.getElementById("insert");
window.addEventListener("keydown", (e)=>{
    pressKey.innerHTML = `
   <div class = "color" > 
   <table>
  <tr>
    <th>Keys</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key == ' ' ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div> `
})
