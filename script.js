const toggle = document.getElementById("toggle");
const basic = document.getElementById("basic-price");
const standard = document.getElementById("standard-price");
const premium = document.getElementById("premium-price");
toggle.addEventListener("change" , () => 
{
    if (toggle.checked) {
        basic.textContent = "$100";
        standard.textContent = "$200";
        premium.textContent = "$300";
    }
    else {
        basic.textContent = "$10";
        standard.textContent = "$20";
        premium.textContent = "$30";
    }

}
);